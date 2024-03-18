export interface User {
  id: string;
  email: string;
  login?: string;
  name?: string;
  lastName?: string;
  permissions?: string[];
  avatar?: string;
}

export interface UserState {
  user: User | null;
  isAuthorized: boolean;
}
