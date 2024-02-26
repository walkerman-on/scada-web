import cl from './ObjectMenu.module.scss';
import { FC, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchObjects } from 'entities/Object/api/fetchObjects';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getObjectsData } from 'entities/Object/model/selectors/object';
import { Skeleton } from 'shared/ui/Skeleton';
import { NavLink as Link } from 'react-router-dom';
import LabelIcon from 'shared/assets/icons/LabelIcon';
import { getObject } from 'app/providers/router/routeConfig/routes';

interface ObjectMenuProps {
  className?: string;
  children?: React.ReactNode;
  activeClassName?: string;
}

export const ObjectMenu: FC<ObjectMenuProps> = () => {
  const dispatch = useAppDispatch();
  const { isLoading, list: facility } = useAppSelector(getObjectsData);

  useEffect(() => {
    dispatch(fetchObjects());
  }, [dispatch]);

  return (
    <div className={cl.ObjectMenu}>
      <div className={cl.objectCountMenu}>
        <span className={cl.objectText}>Объекты</span>
        {/* <span className={cl.objectText}>{Objects.length}</span> */}
      </div>
      <div className={cl.object}>
        {isLoading ? (
          <Skeleton count={5} />
        ) : (
          facility?.map((object) => (
            <Link
              key={object.id}
              to={getObject(object.id)}
              className={({ isActive }) => `${cl.objectLink} ${isActive ? cl.objectLinkActive : ''}`}
            >
              <div className={cl.objectLinkItem}>
                <LabelIcon />
                <span className={cl.objectName}> {object?.title} </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
