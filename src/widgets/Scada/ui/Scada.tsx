import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { IProps } from './IProps';
import { routeConfig } from 'app/providers/router/routeConfig/scadaRouteConfig';

export const Scada = ({}: IProps) => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app scada-container', {}, [theme])}>
      <Sidebar />
      <section>
        <Header />
        {AppRouter(routeConfig)}
      </section>
    </div>
  );
};
