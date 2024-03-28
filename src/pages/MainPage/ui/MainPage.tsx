import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import AppLink from 'shared/ui/AppLink/AppLink';
import { getFacility } from 'app/providers/router/routeConfig/routes';
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
import { useEffect, useMemo, useState } from 'react';
import { ISelectProps } from 'shared/ui/Select/IProps';
import { Message } from 'shared/ui/Message';

const MainPage = () => {
  const { logout, user } = useLogout();
  const { theme } = useTheme();
  const [buttonValue, setButtonValue] = useState({factory: false, facility: false})

  const {list, error, currentFactory} = useAppSelector(state => state.factory)
  const facility = useAppSelector(state => state.facility)
  const facilityError = useAppSelector(state => state.facility.error)
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
    setButtonValue({...buttonValue, factory: true})
  }
  
  const FacilitiesHandle = (id: number) => {
    dispatch(fetchFacilitiesById(id));
    setButtonValue({...buttonValue, facility: true})
  }

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
      {error || facilityError && <Message content={error || facilityError}></Message>}
      {facilityError && <Message content="dcc"></Message>}
      <Select options = {listFactories} defaultValue='Выбор завода/предприятия' onChange={FactoriesHandle}/>
      <Select disabled={currentFactory ? false : true} options = {listFacilitiesByFactoryId} defaultValue='Выбор установки' onChange={FacilitiesHandle}/>
        <AppLink to={getFacility(factoryKey, facilityIdByFactoryId)}>
        <Button type="primary" disabled={buttonValue.facility && buttonValue.facility ? false : true} className={cl.text}>Запуск</Button>
      </AppLink>
    </nav>
  );
};

export default MainPage;
