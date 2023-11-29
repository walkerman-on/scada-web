import { getInfographics, getObject, getTest } from 'app/providers/router/routeConfig/routes';
import cl from './NavigationMenu.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface LinksProps {
  to: string;
  name: string;
}

const Links: LinksProps[] = [
  { to: getObject(), name: 'Объект' },
  { to: getInfographics(), name: 'Инфографика' },
  { to: getTest(), name: 'Тестирование' },
];

export const NavigationMenu = () => {
  return (
    <nav className={cl.NavigationMenu}>
      {Links.map((link) => (
        <AppLink key={link.to} to={link.to} className={cl.mainLink} theme={AppLinkTheme.LIGHT}>
          {link.name}
        </AppLink>
      ))}
    </nav>
  );
};
