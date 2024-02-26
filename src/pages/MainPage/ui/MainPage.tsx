import { Button } from 'shared/ui/Button/Button';
import { useLogout } from 'entities/Auth/hooks/useLogout';
import AppLink from 'shared/ui/AppLink/AppLink';
import { getScada } from 'app/providers/router/routeConfig/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Select } from 'shared/ui/Select/index';
import cl from './MainPage.module.scss';
import LogoutIcon from 'shared/assets/icons/LogoutIcon';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useCallback, useEffect, useMemo } from 'react';
import { getManufactoryData } from 'entities/Manufactory/model/selectors/manufactory';
import { ISelectProps } from 'shared/ui/Select/IProps';
import { fetchManufactories } from 'entities/Manufactory/api/fetchManufactories';
import { manufactoryActions } from 'entities/Manufactory/model/slice/manufactorySlice';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { logout, user } = useLogout();
  const { theme } = useTheme();

  const { list: manufactories } = useAppSelector(getManufactoryData);
  // const { list: facilities } = useAppSelector(getFacilities);

  useEffect(() => {
    dispatch(fetchManufactories());
    // dispatch(manufactoryActions.setLoading(true));
    // simpleFetchList()
    //   .then((response) => {
    //     dispatch(manufactoryActions.setManufactory(response));
    //   })
    //   .catch(() => {
    //     dispatch(manufactoryActions.setError('eririfncdjn'));
    //   })
    //   .finally(() => {
    //     dispatch(manufactoryActions.setLoading(false));
    //   });
  }, [dispatch]);

  const listManufactories: ISelectProps['options'] = useMemo(
    () =>
      manufactories
        ?.filter((elem) => elem.visible)
        ?.map((elem) => ({
          value: elem.id,
          label: elem.title,
          disabled: !elem.enabled,
        })),
    [manufactories],
  );

  // const listFacilities: ISelectProps['options'] = useMemo(
  //   () =>
  //     facilities
  //       ?.filter((elem) => elem.visible)
  //       ?.map((elem) => ({
  //         value: elem.key,
  //         label: elem.title,
  //         disabled: !elem.enabled,
  //       })),
  //   [facilities],
  // );

  const onHandleManufactory = useCallback(
    (manufactoryId: string) => {
      dispatch(manufactoryActions.setManufactoryById(manufactoryId));
      // dispatch(fetchFacilitiesByManufactoryId(manufactoryId));
    },
    [dispatch],
  );

  const onHandleFacility = useCallback(
    (facilityId: string) => {
      // dispatch(setFacilityById(manufactoryId));
    },
    [dispatch],
  );

  return (
    <nav className={classNames('app', {}, [theme])}>
      <header className={cl.header}>
        <div onClick={logout} className={cl.logout}>
          <LogoutIcon />
          <span className={cl.logoutText}>Выйти</span>
        </div>
        <div className={cl.account}>
          <ThemeSwitcher />
          <span className={cl.accountText}>{user?.email}</span>
        </div>
      </header>
      <p style={{ fontWeight: '700' }}>Выбор завода</p>

      {/* <Message content={''} /> */}
      <Select options={listManufactories} defaultValue="Выбор завода/предприятия" onChange={onHandleManufactory} />
      {/* <Select options={listFacilities} defaultValue="Выбор установки" onChange={onHandleFacility} /> */}
      <AppLink to={getScada()}>
        <Button className={cl.text}>перейти в SCADA</Button>
      </AppLink>
    </nav>
  );
};

export default MainPage;
