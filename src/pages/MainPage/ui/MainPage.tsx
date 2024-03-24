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
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchFactories, fetchFactoriesById} from "entities/Factory/index"
import { fetchFacilities, fetchFacilitiesById, fetchFacilitiesByFactoryId } from 'entities/Facility';
import { useEffect, useMemo } from 'react';
import { ISelectProps } from 'shared/ui/Select/IProps';

const MainPage = () => {
  const { logout, user } = useLogout();
  const { theme } = useTheme();

  const {list, error, currentFactory} = useAppSelector(state => state.factory)
  const facility = useAppSelector(state => state.facility)
  const dispatch = useAppDispatch()

  const listFactories: ISelectProps['options'] = useMemo(
    () =>
      list
        ?.filter((elem) => elem.visible)
        ?.map((elem) => ({
          value: elem.id,
          label: elem.title,
          disabled: !elem.enabled,
        })),
    [list],
  );

  const listFacilitiesByFactoryId: ISelectProps['options'] = useMemo(
    () =>
      facility.list
        ?.filter((elem) => elem.visible)
        ?.map((elem) => ({
          value: elem.id,
          label: elem.title,
          disabled: !elem.enabled,
        })),
    [facility.list],
  );

  useEffect(() => {
    dispatch(fetchFactories())
  }, [dispatch])

  const FactoriesHandle = (id: number) => {
    dispatch(fetchFacilities())
    dispatch(fetchFactoriesById(id))
    dispatch(fetchFacilitiesByFactoryId(id))
  }
  
  const FacilitiesHandle = (id: number) => {
    dispatch(fetchFacilitiesById(id))
  }

  const factoryId = useAppSelector(state => state.factory.currentFactory?.id)
  const facilityIdByFactoryId = useAppSelector(state => state.facility.currentFacility?.id)
  const factoryKey = useAppSelector(state => state.factory.currentFactory?.key)

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
    
      <Select options = {listFactories} defaultValue='Выбор завода/предприятия' onChange={FactoriesHandle}/>
      <Select disabled={currentFactory ? false : true} options = {listFacilitiesByFactoryId} defaultValue='Выбор установки' onChange={FacilitiesHandle}/>
        <AppLink to={getScada(factoryKey, facilityIdByFactoryId)}>
        <Button disabled={facility.currentFacility ? false : true} className={cl.text}>перейти в SCADA</Button>
      </AppLink>
    </nav>
  );
};

export default MainPage;
