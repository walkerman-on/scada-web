import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import AppLink from 'shared/ui/AppLink/AppLink';
import { getScada } from 'app/providers/router/routeConfig/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Select } from 'shared/ui/Select/index';
import cl from './MainPage.module.scss'
import LogoutIcon from 'shared/assets/icons/LogoutIcon';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

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
    <nav className={classNames('app', {}, [theme])}>
      <header className={cl.header}>
        <div onClick={logout} className={cl.logout}>
          <LogoutIcon/>
          <span className={cl.logoutText}>Выйти</span>
        </div>
        <div className={cl.account}>
          <ThemeSwitcher />
          <span className={cl.accountText}>{user?.email}</span>
        </div>
      </header>
      <p style={{ fontWeight: '700' }}>Выбор завода</p>
    
      {/* <Message content={''} /> */}
      <Select options = {Factories} defaultValue='Выбор завода/предприятия'/>
      <Select options = {Factories} defaultValue='Выбор установки'/>
        <AppLink to={getScada()}>
        <Button className={cl.text}>перейти в SCADA</Button>
      </AppLink>
    </nav>
  );
};

export default MainPage;
