import { getObject } from 'app/providers/router/routeConfig/routes';
import cl from './ObjectMenu.module.scss';
import { FC, useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import LabelIcon from 'shared/assets/icons/LabelIcon';
import api from 'shared/API/api';
import { Skeleton } from 'shared/ui/Skeleton';

interface ObjectMenuProps {
  className?: string;
  children?: React.ReactNode;
  activeClassName?: string;
}

export const ObjectMenu: FC<ObjectMenuProps> = () => {

const [facility, setFacility] = useState([
])

const [isFacilityLoading, setIsFacilityLoading] = useState(false)

async function fetchFacilities() {
  setIsFacilityLoading(true)
  setTimeout(async() => {
    const facility = await api.getAll()
  setFacility(facility)
  setIsFacilityLoading(false)
  }, 1500)
}

useEffect(() => {
  fetchFacilities()
}, [])


  return (
    <div className={cl.ObjectMenu}>
      <div className={cl.objectCountMenu}>
        <span className={cl.objectText}>Объекты</span>
        {/* <span className={cl.objectText}>{Objects.length}</span> */}
      </div>
      <div className={cl.object}>
        {isFacilityLoading
          ? <Skeleton count = {5}/>
          : facility.map((object) => (
          <Link
            key={object.id}
            to={getObject(object.id)}
            className={({ isActive }) => `${cl.objectLink} ${isActive ? cl.objectLinkActive : ''}`}
          >
            <div className={cl.objectLinkItem}>
              <LabelIcon />
              <span className={cl.objectName}> {object.title} </span>
            </div>
          </Link>
        ))
        }
      </div>
    </div>
  );
};
