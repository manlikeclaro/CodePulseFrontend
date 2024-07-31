import {Injectable} from '@angular/core';
import {Category} from '../models/category';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(`${environment.apiUrl}/categories`);
  }

  addCategory(obj: Category): Observable<object> {
    return this.http.post(`${environment.apiUrl}/categories`, obj);
  }
}
