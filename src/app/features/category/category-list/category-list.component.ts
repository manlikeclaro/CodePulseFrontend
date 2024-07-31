import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CategoryAddComponent} from "../category-add/category-add.component";
import {Category} from "../../../models/category";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categories?: Category[] = [
    new Category('Swimming', 'https:/swimming.com'),
    new Category('Swimming', 'https:/swimming.com'),
    new Category('Swimming', 'https:/swimming.com'),
    new Category('Swimming', 'https:/swimming.com'),
    new Category('Swimming', 'https:/swimming.com'),
  ];

  protected readonly CategoryAddComponent = CategoryAddComponent;
}
