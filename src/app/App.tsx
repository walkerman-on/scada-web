import { routeConfig } from './providers/router/routeConfig/appRouteConfig';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';

const App = () => {
  return (
    <>
      {AppRouter(routeConfig)}
    </>
  );
};

export default App;
