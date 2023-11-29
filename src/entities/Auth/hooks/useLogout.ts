import { deleteUser } from 'entities/Auth/model/slice/userSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAuth, signOut } from 'firebase/auth';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getUserSelector } from 'entities/Auth/model/selectors/userSelector';
import { IUseLogoutReturn } from './types';
import { useNavigate } from 'react-router-dom';
import { getLogin } from 'app/providers/router/routeConfig/routes';

export const useLogout = (): IUseLogoutReturn => {
  const { user } = useAppSelector(getUserSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
        navigate(getLogin());
      })
      .catch(() => alert('Ошибка!'));
  };

  return { logout: handleLogout, user: user };
};
