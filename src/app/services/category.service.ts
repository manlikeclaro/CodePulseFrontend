import {Injectable} from '@angular/core';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CategoryUpdate} from '../models/category-update';
import {CategoryCreate} from '../models/category-create';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  // Injects HttpClient service for making HTTP requests
  constructor(private http: HttpClient) {
  }

  // Fetches all categories from the API
  getAllCategories() {
    return this.http.get(`${environment.apiUrl}/categories`);
  }

  // Fetches a single category by ID from the API
  getCategory(id: string) {
    return this.http.get(`${environment.apiUrl}/categories/${id}`);
  }

  // Adds a new category to the API
  addCategory(obj: CategoryCreate): Observable<object> {
    return this.http.post(`${environment.apiUrl}/categories`, obj);
  }

  // Updates an existing category by ID on the API
  updateCategory(id: string, obj: CategoryUpdate): Observable<object> {
    return this.http.put(`${environment.apiUrl}/categories/${id}`, obj);
  }

  // Deletes a category by ID from the API
  deleteCategory(id: string) {
    return this.http.delete(`${environment.apiUrl}/categories/${id}`);
  }
}
