import React from 'react';
import { Suspense, lazy } from 'react';
//import {FetchData} from './pages/FetchData'

// Replace with True Loading Component
import Loading from './components/common/Loading';
//import {FetchData} from './components/FetchData'

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={ <Loading /> /* Replace With <LoadingScreen /> */ }>
      <Component {...props} />
    </Suspense>
  );

/**
 * @note Routes demo lazy loading with Suspense Fallback Loading indicator.
 */

// HOME PAGE
const Home = Loadable(lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./pages/Home')
}));

// Map PAGE
const Map = Loadable(lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./pages/Map')
}));

const AppRoutes = [
  {
    index: true,
    path: '/',
    element: <Home />,
    navSlug: "Home"
  },
  {
    path: '/map',
    element: <Map />,
    navSlug: "Map"
  },
];

export default AppRoutes;
