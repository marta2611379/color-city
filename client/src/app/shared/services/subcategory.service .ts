import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ISearchSubcategory,
  ISubcategory,
  ISubcategoryCreate,
} from '../interfaces/subcategory.interface';
import { FilterParamsPipe } from '../pipes/filter-params.pipe';
@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {

  constructor(private http: HttpClient) {}

  getSubcategories() {
    return this.http.get<Array<ISubcategory>>(`/subcategories/get/all`);
  }

  getSubcategoriesBySearch(searchParams?: ISearchSubcategory) {
    return this.http.get<Array<ISubcategory>>(
      `/subcategories/get/by/${new FilterParamsPipe().transform(searchParams)}`
    );
  }

  createSubcategory(subcategoryData: ISubcategoryCreate) {
    return this.http.post(`/subcategories/create`, subcategoryData);
  }

  updateSubcategory(id: string, subcategoryData: ISubcategoryCreate) {
    return this.http.patch(`/subcategories/update/${id}`, subcategoryData);
  }

  deleteSubcategory(id: string) {
    return this.http.delete(`/subcategories/delete/${id}`);
  }
}
