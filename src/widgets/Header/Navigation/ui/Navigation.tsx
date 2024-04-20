import React from 'react';
import cl from "./Navigation.module.scss"
import LogoutIcon from 'shared/assets/icons/LogoutIcon';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Link } from 'react-router-dom';
import { getAccount } from 'app/providers/router/routeConfig/routes';
import { useAuth } from 'entities/Auth/hooks/useAuth';
import { useLogout } from 'entities/Auth/hooks/useLogout';

export const Navigation = () => {
      const { isAuth, user } = useAuth();
  const { logout } = useLogout();
    return (
 <nav >
      <header className={cl.header}>
        <div onClick={logout} className={cl.logout}>
          <LogoutIcon/>
          <span className={cl.logoutText}>Выйти</span>
        </div>
        <div className={cl.account}>
          <ThemeSwitcher />
          <Link to={getAccount(user?.id)}>
            <span className={cl.accountText}>{user?.email}</span>
          </Link>
        </div>
      </header>
    </nav>
    );
};
