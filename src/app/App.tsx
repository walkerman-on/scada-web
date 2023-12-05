import { Message } from 'shared/ui/Message';
import { routeConfig } from './providers/router/routeConfig/appRouteConfig';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';

const App = () => {
  return (
    <>
      {AppRouter(routeConfig)}
      {/* тут будет Notification */}
      {/* <Message content="" /> */}
    </>
  );
};

export default App;
