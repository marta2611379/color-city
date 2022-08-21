import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBrand, IBrandCreate } from '../interfaces/brand.interface';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getBrands() {
    return this.http.get<Array<IBrand>>(`/brands/get/all`);
  }

  createBrand(brandData: IBrandCreate) {
    return this.http.post(`/brands/create`, brandData);
  }

  updateBrand(id: string, brandData: IBrandCreate) {
    return this.http.patch(`/brands/update/${id}`, brandData);
  }

  deleteBrand(id: string) {
    return this.http.delete(`/brands/delete/${id}`);
  }
}
