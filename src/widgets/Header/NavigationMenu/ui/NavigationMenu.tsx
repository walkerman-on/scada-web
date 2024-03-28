import { getInfographics, getTest, getFacility } from 'app/providers/router/routeConfig/routes';
import cl from './NavigationMenu.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';

interface LinksProps {
  to: string;
  name: string;
}

export const NavigationMenu = () => {
  const {currentFacility} = useAppSelector(state => state.facility)
  const {key} = useAppSelector(state => state.factory.currentFactory)

  const Links: LinksProps[] = [
    { to: getFacility(key, currentFacility?.id), name: 'Установка' },
    { to: getInfographics(key, currentFacility?.id), name: 'Инфографика ТП' },
    { to: getTest(key, currentFacility?.id), name: 'Описание ТП' },
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
