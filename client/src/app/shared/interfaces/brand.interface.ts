export interface IBrand {
  _id: string;
  title: string;
  status?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export interface IBrandCreate {
  title: string;
  status?: string;
}
