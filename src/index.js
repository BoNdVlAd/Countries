import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'country/:name',
        element: <Details />,
      },
      {
        path: 'details/:name',
        element: <Details />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>...Loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
