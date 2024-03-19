import { getInfographics, getFacility, getTest } from 'app/providers/router/routeConfig/routes';
import cl from './NavigationMenu.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';

interface LinksProps {
  to: string;
  name: string;
}



export const NavigationMenu = () => {
  const {currentFacility} = useAppSelector(state => state.facility)

  const Links: LinksProps[] = [
  { to: getFacility(currentFacility?.id, currentFacility?.factoryId), name: 'Объект' },
  { to: getInfographics(), name: 'Инфографика' },
  { to: getTest(), name: 'Тестирование' },
];

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
