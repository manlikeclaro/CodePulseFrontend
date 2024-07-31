import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Category} from "../../../models/category";
import {FormsModule} from "@angular/forms";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  providers: [],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  category: Category = new Category();

  constructor(private categoryService: CategoryService) {
  }

  handleSubmit(obj: Category) {
    console.log(obj);
    this.categoryService.addCategory(obj)
      .subscribe({
        next: (res) => {},
        error: err => {}
      })
    ;
  }
}
