import {Component, OnDestroy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Category} from '../../../models/category';
import {FormsModule} from '@angular/forms';
import {CategoryService} from '../../../services/category.service';
import {Subscription} from 'rxjs';

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
  // Initialize a new category object for form handling
  category: Category = new Category();
  private categorySubscription?: Subscription;

  constructor(private categoryService: CategoryService) {
  }

  ngOnDestroy() {
    // Clean up subscription to avoid memory leaks
    this.categorySubscription?.unsubscribe();
    console.log('CategoryAddComponent destroyed');
  }

  handleSubmit(obj: Category) {
    console.log('Submitting category:', obj);
    // this.categoryService.subscribe(this.categoryService.addCategory(obj));
    this.categorySubscription = this.categoryService.addCategory(obj)
      .subscribe({
        next: (response) => {
          console.log('Category added successfully:', response);
        },
        error: (err) => {
          console.error('Error adding category:', err);
        },
        complete: () => {
          console.log('Categories added successfully');
        }
      });
  }
}
