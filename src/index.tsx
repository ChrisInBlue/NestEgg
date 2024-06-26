import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/reset.css';
import './assets/css/theme.css';
import App from './App';
import './assets/css/responsive.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from './Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
