export interface ICategory {
  _id: string;
  title: string;
  status?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface ICategoryCreate {
  title: string;
  status?: string;
}
