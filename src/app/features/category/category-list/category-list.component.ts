import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Category} from '../../../models/category';
import {CategoryService} from '../../../services/category.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  categories: Category[] = []; // Store categories
  private subscriptions: Subscription = new Subscription(); // Manage subscriptions

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Fetch categories from the server on component initialization
    const fetchCategoriesSubscription = this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        // @ts-ignore
        this.categories = response.data; // Handle successful response
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      },
      complete: () => {
        if (this.categories.length > 0) {
          console.log(`${this.categories.length} - Categories fetched successfully`);
        } else {
          console.log(`${this.categories.length} - Categories fetched`);
        }
      }
    });

    // Add subscription to the collection
    this.subscriptions.add(fetchCategoriesSubscription);
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.unsubscribe();
  }

  deleteCategory(id: string) {
    // Delete category by id
    const deleteCategorySubscription = this.categoryService.deleteCategory(id).subscribe({
      next: () => {
        // Remove the deleted category from the list
        this.categories = this.categories.filter(category => category.id !== id);
      },
      error: (err) => {
        console.error('Error deleting category:', err);
      },
      complete: () => {
        console.log('Category deleted successfully');
        this.router.navigateByUrl('/admin/categories');
      }
    });

    // Add subscription to the collection
    this.subscriptions.add(deleteCategorySubscription);
  }
}
