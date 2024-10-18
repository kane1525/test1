import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import NotFound from './pages/not-found';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SubscriptionsPage from './pages/subscriptions';
import ErrorBoundary from './error-boundary';
import PageWithError from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'subscriptions',
        element: <SubscriptionsPage />,
      },
      {
        path: 'page-with-error',
        element: <PageWithError />,
      },
      {
        path: '*', // Catch-all route for "Not Found" page
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
