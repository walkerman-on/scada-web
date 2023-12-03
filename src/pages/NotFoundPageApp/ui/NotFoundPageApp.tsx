import { classNames } from 'shared/lib/classNames/classNames';
import cl from './NotFoundPageApp.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { getMain } from 'app/providers/router/routeConfig/routes';
import { LoaderNotFound } from 'shared/ui/Loaders'

export const NotFoundPageApp = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(`app ${cl.NotFoundPageApp}`, {}, [theme])}>
      <LoaderNotFound/>
      <div className={cl.text}>
        <p className={cl.textInfo}>Ой! Страница не найдена...</p>
        <Link to = {getMain()}>
          <p className={cl.textBack}>Вернуться на главную</p>
        </Link>
      </div>
    </div>
  );
};
