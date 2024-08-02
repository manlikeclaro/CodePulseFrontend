import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";
import {Subscription} from "rxjs";
import {CategoryUpdate} from "../../../models/category-update";

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit, OnDestroy {
  id: string | null = null;
  category?: Category;
  private subscriptions: Subscription = new Subscription(); // Manage subscriptions

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Subscribe to route parameters to get the category ID
    const paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get("id");

        if (this.id) {
          // Fetch category details using the ID
          const categorySubscription = this.categoryService.getCategory(this.id).subscribe({
            next: (response) => {
              // @ts-ignore
              this.category = response.data;
            },
            error: (err) => {
              console.error('Error fetching category:', err);
            }
          });
          this.subscriptions.add(categorySubscription);
        }
      },
      error: (err) => {
        console.error('Error with route parameters:', err);
      }
    });
    this.subscriptions.add(paramsSubscription);
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this.subscriptions.unsubscribe();
  }

  handleSubmit(obj: Category) {
    const updatedCategory = new CategoryUpdate(obj.name, obj.urlHandle);

    const updateSubscription = this.categoryService.updateCategory(obj.id, updatedCategory).subscribe({
      next: (response) => {
        console.log('Submitting category:', updatedCategory);
      },
      error: (err) => {
        console.error('Error updating category:', err);
      },
      complete: () => {
        console.log('Category updated successfully:');
        this.router.navigateByUrl('/admin/categories');
      }
    });
    this.subscriptions.add(updateSubscription);
  }
}
