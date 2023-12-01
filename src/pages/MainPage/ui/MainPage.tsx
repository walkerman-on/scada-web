import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import { Message } from 'shared/ui/Message';
import AppLink from 'shared/ui/AppLink/AppLink';
import cl from 'widgets/AuthForm/AuthForm.module.scss';
import { getScada } from 'app/providers/router/routeConfig/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Select } from 'shared/ui/Select/index';

const MainPage = () => {
  const { logout, user } = useLogout();
  const { theme } = useTheme();

  interface FactoriesProps {
    value: string,
    label: string,
    disabled?: boolean
  }
  const Factories: FactoriesProps[]  = [
    { value: 'portovaya', label: 'Завод по сжижению газа (СПГ Портовая)'},
    { value: 'lucy', label: 'Завод по переработке нефти "Киришинефтеоргсинтез"' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true }, 
    ]

  return (
    <div className={classNames('app', {}, [theme])}>
      <p style={{ fontWeight: '700' }}>Выбор завода</p>
      <Button onClick={logout}>Выйти из профиля {user?.email}</Button>
      <AppLink to={getScada()}>
        <Button className={cl.text}>B Scada</Button>
      </AppLink>
      {/* <Message content={''} /> */}
      <Select options = {Factories}/>
      </div>
  );
};

export default MainPage;
