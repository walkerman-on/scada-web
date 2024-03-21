import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider/index';
import { Provider } from 'react-redux';
import { store, persistor } from 'app/providers/StoreProvider/index';
import {PersistGate} from 'redux-persist/integration/react';
import 'shared/services/firebase/firebase';

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
