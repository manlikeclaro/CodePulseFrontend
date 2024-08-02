import {Injectable} from '@angular/core';
import {Category} from '../models/category';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CategoryUpdate} from "../models/category-update";
import {CategoryCreate} from "../models/category-create";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(`${environment.apiUrl}/categories`);
  }

  getCategory(id: string) {
    return this.http.get(`${environment.apiUrl}/categories/${id}`);
  }

  addCategory(obj: CategoryCreate): Observable<object> {
    return this.http.post(`${environment.apiUrl}/categories`, obj);
  }

  updateCategory(id: string, obj: CategoryUpdate): Observable<object> {
    return this.http.put(`${environment.apiUrl}/categories/${id}`, obj);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${environment.apiUrl}/categories/${id}`);
  }
}
