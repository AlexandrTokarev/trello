import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import store from './store/store.ts';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Hide StrictMode https://github.com/atlassian/react-beautiful-dnd/issues/2396
  //<StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</StrictMode>
);
