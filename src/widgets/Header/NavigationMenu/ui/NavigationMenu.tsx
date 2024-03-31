import { getInfographics, getTest, getFacility } from 'app/providers/router/routeConfig/routes';
import cl from './NavigationMenu.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useParams } from 'react-router-dom';

interface LinksProps {
  to: string;
  name: string;
}

export const NavigationMenu = () => {
  const {currentFacility} = useAppSelector(state => state.facility)
  const URL = useParams()
  const value = URL["*"];
  const parts = value.split('/');
  const factoryKey = parts[0];
  const facilityId= parts[2];

  const Links: LinksProps[] = [
    { to: getFacility(factoryKey, facilityId), name: 'Установка' },
    { to: getInfographics(factoryKey, facilityId), name: 'Инфографика ТП' },
    { to: getTest(factoryKey, facilityId), name: 'Описание ТП' },
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
