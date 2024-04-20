import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import AppLink from 'shared/ui/AppLink/AppLink';
import { getAccount, getFacility } from 'app/providers/router/routeConfig/routes';
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
import { Link } from 'react-router-dom';
import { Navigation } from 'widgets/Header/Navigation';

const MainPage = () => {
  const { logout, user } = useLogout();
  const { theme } = useTheme();
  const [buttonValue, setButtonValue] = useState({factory: false, facility: false})

  const {list} = useAppSelector(state => state.factory)
  const facility = useAppSelector(state => state.facility)
  const dispatch = useAppDispatch()

  const listFactories: ISelectProps['options'] = useMemo(
    () =>
      list
        ?.filter((elem) => elem.visible)
        ?.map((elem) => ({
          value: elem.key,
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
  }, [])

  const [id, setId] = useState({factory: null, facility: null})

  const FactoriesHandle = (factoryId: string) => {
    dispatch(fetchFacilitiesByFactoryId(factoryId))
    setId({...id, factory: factoryId})
    setButtonValue({...buttonValue, factory: true})
  }
  
  const FacilitiesHandle = (facilityId: string) => {
    dispatch(fetchFacilitiesById(facilityId))
    setId({...id, facility: facilityId})
    setButtonValue({...buttonValue, facility: true})
  }

  return (
      <div className={classNames('app', {}, [theme])}>
      <Navigation />
      <p style={{ fontWeight: '700' }}>Выбор завода</p>
      {facility.error && <Message content={facility.error}></Message>}
      <Select options = {listFactories} defaultValue='Выбор завода/предприятия' onChange={FactoriesHandle}/>
      <Select options = {listFacilitiesByFactoryId} defaultValue='Выбор установки' onChange={FacilitiesHandle}/>
      <AppLink to={getFacility(id.factory, id.facility)}>
        <Button type="primary" disabled={buttonValue.factory && buttonValue.facility ? false : true} className={cl.text}>Запуск</Button>
      </AppLink>

    </div>
  );
};

export default MainPage;
