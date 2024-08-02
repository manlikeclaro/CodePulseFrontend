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
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramsSubscription?: Subscription;
  updateSubscription?: Subscription;

  category?: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap
      .subscribe({
        next: (params) => {
          this.id = params.get("id");

          if (this.id) {
            this.categoryService.getCategory(this.id)
              .subscribe({
                next: (response) => {
                  // @ts-ignore
                  this.category = response.data;
                }
              })
          }
        }
      })
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
    this.updateSubscription?.unsubscribe();
  }

  handleSubmit(obj: Category) {
    const updatedCategory = new CategoryUpdate(obj.name, obj.urlHandle);
    console.log('Submitting category:', updatedCategory);

    this.updateSubscription = this.categoryService.updateCategory(obj.id, updatedCategory)
      .subscribe({
        next: (response) => {
          console.log('Category updated successfully:', response);
        },
        error: (err) => {
          console.error('Error updating category:', err);
        },
        complete: () => {
          this.router.navigateByUrl('/admin/categories')
            .then(r => r);
        }
      })
  }
}
