import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";
import {Subscription} from "rxjs";

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

  category?: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
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
  }

  handleSubmit(obj: Category) {

  }
}
