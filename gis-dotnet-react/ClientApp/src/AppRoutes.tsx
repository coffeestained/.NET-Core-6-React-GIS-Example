import React from 'react';
import { lazy } from 'react';
import { SmartSuspense } from './components/common/SmartSuspense';
import Loading from './components/common/Loading';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <SmartSuspense
      fallback={ <Loading />} children={ <Component {...props} /> } fallbackDelayMs={ 1000 } fallbackMinDurationMs={ 1000 } />
  );

/**
 * @note Routes demo lazy loading with Suspense Fallback Loading indicator.
 */

// HOME PAGE
const Home = Loadable(lazy(() => import('./pages/Home')));

// COUNTER PAGE
const Counter = Loadable(lazy(() => import('./pages/Counter')));

// FETCH PAGE
const FetchData = Loadable(lazy(() => import('./pages/FetchData')));

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/fetch-data',
    element: <FetchData />,
  }
];

export default AppRoutes;
