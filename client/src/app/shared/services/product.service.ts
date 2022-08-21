import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBrand, IBrandCreate } from '../interfaces/brand.interface';
import { FilterParamsPipe } from '../pipes/filter-params.pipe';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Array<any>>(`/products/get/all`);
  }

  getSubcategoriesBySearch(searchParams?: any) {
    return this.http.get<Array<any>>(
      `/products/get/by/${new FilterParamsPipe().transform(searchParams)}`
    );
  }

  createProduct(brandData: IBrandCreate) {
    return this.http.post(`/products/create`, brandData);
  }

  updateProduct(id: string, brandData: IBrandCreate) {
    return this.http.patch(`/products/update/${id}`, brandData);
  }

  deleteProduct(id: string) {
    return this.http.delete(`/products/delete/${id}`);
  }
}
