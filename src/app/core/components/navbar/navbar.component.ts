import { Component } from '@angular/core';
import {CategoryListComponent} from "../../../features/category/category-list/category-list.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title: string = 'CodePulse';

  protected readonly CategoryListComponent = CategoryListComponent;
}
