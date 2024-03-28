import { getFacility } from 'app/providers/router/routeConfig/routes';
import cl from './FacilityMenu.module.scss';
import { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';
import LabelIcon from 'shared/assets/icons/LabelIcon';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchFacilitiesById } from 'entities/Facility/api/fetchFacilitiesById';

import React from 'react';
import { IFacility } from 'entities/Facility/types/types';

interface FacilityMenuProps {
  className?: string;
  children?: React.ReactNode;
  activeClassName?: string;
  filteredFacilities?: IFacility[]
}

export const FacilityMenu: FC<FacilityMenuProps> = ({filteredFacilities}) => {
  const {key} = useAppSelector(state => state.factory.currentFactory)

  const dispatch = useAppDispatch()
  
  const FacilitiesHandle = (id:number) => {
    dispatch(fetchFacilitiesById(id))
  }

  return (
    <div className={cl.ObjectMenu}>
      <div className={cl.objectCountMenu}>
        <span className={cl.objectText}>Установки</span>
        <span className={cl.objectText}>{filteredFacilities?.length}</span>
      </div>
      <div className={cl.object} >
        {filteredFacilities.length != 0 ?
          filteredFacilities.map((item) => (
          <Link
            key={item.id}
            to={getFacility(key, item?.id)}
            className={({ isActive }) => `${cl.objectLink} ${isActive ? cl.objectLinkActive : ''}`}
            onClick={() => FacilitiesHandle(item?.id)}
          >
            <div title={item?.title} className={cl.objectLinkItem}>
              <LabelIcon />
              <span  className={cl.objectName}> {item?.title} </span>
            </div>
          </Link>
        ))
        : <h1>Установок не найдено</h1>
      }
      </div>
    </div>
  );
};
