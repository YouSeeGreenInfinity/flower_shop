import { createRoot } from 'react-dom/client';
import App from './App';
import { injectStore } from './services/apiInstance';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // твоя тема MUI

injectStore(store);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* сброс базовых стилей Material UI */}
      <App />
    </ThemeProvider>
  </Provider>
);
