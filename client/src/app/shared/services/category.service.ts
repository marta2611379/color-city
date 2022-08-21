import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBrand, IBrandCreate } from '../interfaces/brand.interface';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Array<IBrand>>(`/categories/get/all`);
  }

  createCategory(brandData: IBrandCreate) {
    return this.http.post(`/categories/create`, brandData);
  }

  updateCategory(id: string, brandData: IBrandCreate) {
    return this.http.patch(`/categories/update/${id}`, brandData);
  }

  deleteCategory(id: string) {
    return this.http.delete(`/categories/delete/${id}`);
  }
}
