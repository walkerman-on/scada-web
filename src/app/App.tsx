import { Message } from 'shared/ui/Message';
import { routeConfig } from './providers/router/routeConfig/appRouteConfig';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { DocumentData, QuerySnapshot, collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { useEffect } from "react";
import { fetchFactories } from "entities/Factory";
import { IFactory } from 'entities/Factory/types/types';
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
