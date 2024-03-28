import cl from './AccountMenu.module.scss';
import { FC } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { NavLink as Link } from 'react-router-dom';
import DefaultUserIcon from 'shared/assets/icons/DefaultUserIcon';
import { getAccount } from 'app/providers/router/routeConfig/routes';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';

interface AccountMenuProps {
  className?: string;
  children?: React.ReactNode;
}

export const AccountMenu: FC<AccountMenuProps> = () => {

  const userId = useAppSelector(state => state.user.user.id)
  return (
    <div className={cl.AccountMenu}>
      <ThemeSwitcher />
      <div className={cl.account}>
        <Link to={getAccount(userId)}>
          <DefaultUserIcon />
        </Link>
      </div>
    </div>
  );
};
