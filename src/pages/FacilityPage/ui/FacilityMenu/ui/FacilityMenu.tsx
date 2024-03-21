import { getFacility, getScada } from 'app/providers/router/routeConfig/routes';
import cl from './FacilityMenu.module.scss';
import { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';
import LabelIcon from 'shared/assets/icons/LabelIcon';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchFacilitiesById } from 'entities/Facility/api/fetchFacilitiesById';
import React from 'react';

interface FacilityMenuProps {
  className?: string;
  children?: React.ReactNode;
  activeClassName?: string;
}

export const FacilityMenu: FC<FacilityMenuProps> = () => {
  const {list} = useAppSelector(state => state?.facility)

  const dispatch = useAppDispatch()
  
  const FacilitiesHandle = (id:number) => {
    dispatch(fetchFacilitiesById(id))
  }

  return (
    <div className={cl.ObjectMenu}>
      <div className={cl.objectCountMenu}>
        <span className={cl.objectText}>Установки</span>
        <span className={cl.objectText}>{list?.length}</span>
      </div>
      <div className={cl.object} >
        {list.map((item) => (
          <Link
            key={item.id}
            to={getScada(item?.factoryId, item?.id)}
            className={({ isActive }) => `${cl.objectLink} ${isActive ? cl.objectLinkActive : ''}`}
            onClick={() => FacilitiesHandle(item?.id)}
          >
            <div title={item?.title} className={cl.objectLinkItem}>
              <LabelIcon />
              <span  className={cl.objectName}> {item?.title} </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
