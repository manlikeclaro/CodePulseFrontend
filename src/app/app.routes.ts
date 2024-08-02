import {Routes} from '@angular/router';
import {CategoryListComponent} from "./features/category/category-list/category-list.component";
import {CategoryAddComponent} from "./features/category/category-add/category-add.component";
import {CategoryEditComponent} from "./features/category/category-edit/category-edit.component";

export const routes: Routes = [
  {path: 'admin/categories', component: CategoryListComponent},
  {path: 'admin/categories/add', component: CategoryAddComponent},
  {path: 'admin/categories/edit/:id', component: CategoryEditComponent},
  {path: '', redirectTo: 'admin/categories', pathMatch: 'full'},
];
