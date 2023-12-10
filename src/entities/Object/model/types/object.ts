export interface IObject {
  id: number;
  title: string;
  description: string;
}

export interface ObjectSchema {
  isLoading: boolean;
  error?: string;
  list?: IObject[];
  object?: IObject;
}
