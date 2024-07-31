import {Injectable} from '@angular/core';
import {Category} from "../models/category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  addCategory(obj: Category): Observable<object> {
    return this.http.post('http://localhost:5042/api/categories', obj);
  }
}
