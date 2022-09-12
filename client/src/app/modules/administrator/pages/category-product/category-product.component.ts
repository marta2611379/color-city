import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category.interface';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit {
  categories: Array<ICategory> = [];

  constructor() {}

  ngOnInit(): void {}

  updateCategoryList(categories: ICategory[]) {
    this.categories = categories;
  }
}
