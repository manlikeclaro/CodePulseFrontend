import {Component, OnDestroy} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CategoryService} from '../../../services/category.service';
import {Subscription} from 'rxjs';
import {CategoryCreate} from '../../../models/category-create';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  providers: [],
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnDestroy {
  category: CategoryCreate = new CategoryCreate(); // Initialize a new category object for form handling
  private categorySubscription: Subscription = new Subscription(); // Manage subscriptions

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) {
  }

  ngOnDestroy() {
    // Clean up subscription to avoid memory leaks
    this.categorySubscription.unsubscribe();
    console.log('CategoryAddComponent destroyed');
  }

  handleSubmit(obj: CategoryCreate) {
    const addCategorySubscription = this.categoryService.addCategory(obj).subscribe({
      next: (response) => {
        console.log('Submitting category:', response);
      },
      error: (err) => {
        console.error('Error adding category:', err);
      },
      complete: () => {
        console.log('Category added successfully');
        this.router.navigateByUrl('/admin/categories');
      }
    });

    // Add subscription to the collection
    this.categorySubscription.add(addCategorySubscription);
  }
}
