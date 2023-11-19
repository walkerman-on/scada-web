export interface User {
  id: string;
  email: string;
  login?: string;
  name?: string;
  lastName?: string;
  permissions?: string[];
  avatar?: string;
}

export interface UserSchema {
  user: User | null;
  isAuthorized: boolean;
}
