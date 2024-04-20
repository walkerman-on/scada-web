import { Link, Navigate } from 'react-router-dom';
import { useAuth } from 'entities/Auth/hooks/useAuth';
import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import { getAccount, getLogin, getMain } from 'app/providers/router/routeConfig/routes';
import cl from "./AccountPage.module.scss"
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LogoutIcon from 'shared/assets/icons/LogoutIcon';
import { Navigation } from 'widgets/Header/Navigation';
import DefaultUserIcon from 'shared/assets/icons/DefaultUserIcon';
import TurnLeftArrow from 'shared/assets/icons/TurnLeftArrow';

const AccountPage = () => {
  const { isAuth, user } = useAuth();
  const { logout } = useLogout();
  const { theme } = useTheme();

  return isAuth ?  (
    <div className={classNames('app', {}, [theme])}>
      <Navigation />
      <Link to={getMain()}>
        <p className={cl.scadaBlock}>
          <TurnLeftArrow/>
          <span className={cl.scadaBlockText}>Главная</span>
        </p>
      </Link>
      <div className={cl.AccountPage}>
        {/* <p style={{ fontWeight: '700' }}>Личный кабинет диспетчера</p> */}
        <div className={cl.info}>
          <div className={cl.card}>
            <div className={cl.account}>
              <DefaultUserIcon height={140} width={140}/>
            </div>
            <div className={cl.infoBlock}>
              <span className={cl.mainText}>Грошев</span>
              <span className={cl.mainText}>Алексей</span>
              <span className={cl.mainText}>Игоревич</span>
            </div>
            <span className={cl.infoText}>ID: <span className={cl.mainText}>{user?.id}</span></span>
          <span>Время в системе: с 15:12 - сейчас</span>
          </div>
        </div>
      </div>
      
    </div>
  ) : (
    <Navigate to={getLogin()}/>
  )
};

export default AccountPage;
