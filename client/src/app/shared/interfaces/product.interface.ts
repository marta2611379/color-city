import { IBrand } from './brand.interface';
import { ICategory } from './category.interface';
import { ISubcategory } from './subcategory.interface';

export interface IProduct {
  _id: string;
  title: string;
  status?: string;
  updatedAt?: Date;
  createdAt?: Date;
  category_id?: ICategory;
  subcategory_id?: ISubcategory;
  manufacturer_id?: IBrand;
}

// export interface ISubcategoryCreate {
//   title: string;
//   category_id: string;
//   status?: string;
// }

// export interface ISearchSubcategory {
//   category_id?: string;
//   status?: string;
// }
