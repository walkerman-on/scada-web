import { Navigate } from 'react-router-dom';
import { useAuth } from 'entities/Auth/hooks/useAuth';
import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import { getLogin } from 'app/providers/router/routeConfig/routes';

const AccountPage = () => {
  const { isAuth, user } = useAuth();
  const { logout } = useLogout();

  return isAuth ? (
    <div>
      <p style={{ fontWeight: '700' }}>Личный кабинет диспетчера</p>
      <Button onClick={logout}>Выйти из профиля {user?.email}</Button>
    </div>
  ) : (
    <Navigate to={getLogin()} />
  );
};

export default AccountPage;
