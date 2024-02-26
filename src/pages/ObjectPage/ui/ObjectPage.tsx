import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getObjectsData } from 'entities/Object/model/selectors/object';
import { fetchObjectById } from 'entities/Object/api/fetchObjectById';
import { Spin } from 'antd';
import cl from "./ObjectPage.module.scss"
import scheme from "./scheme.svg"
import { SchemeSidebar } from './SchemeSidebar';
const ObjectPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, object } = useAppSelector(getObjectsData);

  useEffect(() => {
    dispatch(fetchObjectById(id));
  }, [id, dispatch]);

  return (
    <div className={cl.ObjectPage}>
      {/* <p style={{ fontWeight: "700" }}>
        Технологическая схема объекта c id {id}
      </p> */}
      <SchemeSidebar/>
      <div className={cl.scheme} style={{backgroundImage: `url(${scheme})`}}>
        Тут изображена схемка!
      </div>
    </div>
  );
};

export default ObjectPage;
