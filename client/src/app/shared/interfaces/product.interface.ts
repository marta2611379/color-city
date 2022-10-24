import {
  AplicationToolsEnum,
  UsedForMaterialsEnum,
  UseTypesEnum,
} from '../enums/common.enum';
import { IBrand } from './brand.interface';
import { ICategory } from './category.interface';
import { ISubcategory } from './subcategory.interface';

export interface IProduct {
  _id?: string;
  imgs: Array<{ img: any }>;
  title: string;
  // manufacturer?: any;
  // category?: any;
  // subcategory?: any;
  manufacturer_id: any;
  category_id: any;
  subcategory_id: any;
  // manufacturer_id: string | IBrand;
  // category_id: string | ICategory;
  // subcategory_id: string | ISubcategory;
  manufacturer_country: string;
  article_number: string;
  goods: Array<IGood>;
  drying_time: string;
  odorless: boolean;
  product_base: string;
  expense: string;
  application_tool: Array<AplicationToolsEnum>;
  use_types: Array<UseTypesEnum>;
  used_for_materials: Array<UsedForMaterialsEnum>;
  textured: boolean;
  washing: boolean;
  description: string;
  status: string;
}

export interface IGood {
  unit: string;
  volume: number;
  price: number;
  code: number;
  colors: string;
  available_quantity: number;
  degree_brilliance?: string;
}
