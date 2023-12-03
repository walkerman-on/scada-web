import { LoaderNotFound } from 'shared/ui/Loaders';
import cl from './NotFoundPageScada.module.scss';

export const NotFoundPageScada = () => {
  return (
    <div className={cl.NotFoundPage}>
      <LoaderNotFound/>
      <div className={cl.text}>
        <p className={cl.textInfo}>Ой! Страница не найдена...</p>
        <p className={cl.textBack}>Проверьте правильность URL-адреса</p>
      </div> 
    </div>
  );
};
