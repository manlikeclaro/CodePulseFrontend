import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Category} from '../../../models/category';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories?: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    // Fetch categories from the server on component initialization
    this.categoryService.getAllCategories()
      .subscribe({
        next: (response) => {
          // @ts-ignore
          this.categories = response.data;
        },
        error: (err) => {
          console.error('Error fetching categories:', err)
        },
        complete: () => {
          console.log('Categories fetched successfully');
        }
      });
  }
}
