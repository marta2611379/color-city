import { ICategory } from './category.interface';

export interface ISubcategory {
  _id: string;
  title: string;
  status?: string;
  updatedAt?: Date;
  createdAt?: Date;
  category_id?: ICategory;
}

export interface ISubcategoryCreate {
  title: string;
  category_id: string;
  status?: string;
}

export interface ISearchSubcategory {
  category_id?: string;
  status?: string;
}
