import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import { Message } from 'shared/ui/Message';
import AppLink from 'shared/ui/AppLink/AppLink';
import cl from 'widgets/AuthForm/AuthForm.module.scss';
import { getScada } from 'app/providers/router/routeConfig/routes';

const MainPage = () => {
  const { logout, user } = useLogout();

  return (
    <div>
      <p style={{ fontWeight: '700' }}>Выбор завода</p>
      <Button onClick={logout}>Выйти из профиля {user?.email}</Button>
      <AppLink to={getScada()}>
        <Button className={cl.text}>B Scada</Button>
      </AppLink>
      <Message content={''} />
    </div>
  );
};

export default MainPage;
