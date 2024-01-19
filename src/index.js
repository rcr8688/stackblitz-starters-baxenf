import React, { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Body from './Component/Body';
import Error from './Component/error';
// import Grocery from './Component/grocery';

import About from './Component/about';
import Contact from './Component/contact';
import RestMenu from './Component/restmenu';
const root = createRoot(document.getElementById('app'));
const GroceryLazy = lazy(() => import('./Component/grocery'));
const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>loading..........</h1>}>
            <GroceryLazy />
          </Suspense>
        ),
      },
      {
        path: '/restmenu/:restid',
        element: <RestMenu />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={routerConfig} />
    {/* <AppLayout /> */}
  </StrictMode>
);
