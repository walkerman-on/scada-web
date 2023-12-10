export interface IManufactory {
  id: number;
  key: string;
  title: string;
  enabled: boolean;
  visible: boolean;
}

export interface ManufactorySchema {
  isLoading: boolean;
  error?: string;
  list?: IManufactory[];
  object?: IManufactory;
}
