import { User } from '../model/types/user';

export interface IUseLoginReturn {
  login: (email: string, password: string) => void;
}

export interface IUseSignUpReturn {
  signUp: (email: string, password: string) => void;
}

export interface IUseLogoutReturn {
  logout: () => void;
  user: User;
}
