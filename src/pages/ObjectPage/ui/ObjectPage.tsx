import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getObjectsData } from 'entities/Object/model/selectors/object';
import { fetchObjectById } from 'entities/Object/api/fetchObjectById';
import cl from "./ObjectPage.module.scss"
import schemeLight from "./schemeLight.svg"
import schemeDark from "./schemeDark.svg"
import { SchemeSidebar } from './SchemeSidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext"

const ObjectPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, object } = useAppSelector(getObjectsData);

  useEffect(() => {
    dispatch(fetchObjectById(id));
  }, [id, dispatch]);

  const {theme} = useTheme()

  const schemeURL = theme === Theme.LIGHT ? schemeLight : schemeDark;  

  return (
    <div className={cl.ObjectPage}>
      <SchemeSidebar/>
      <div className={cl.scheme} style={{backgroundImage: `url(${schemeURL})`}}></div>
    </div>
  );
};

export default ObjectPage;
