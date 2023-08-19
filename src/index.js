// LIBRARIES //
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { useParams } from 'react-router-dom';

// COMPONENTS //
import App from './components/App';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import NewPropertyForm from './components/NewPropertyForm';
import PropertyList from './components/PropertyList';
import PropertyPage from './components/PropertyPage';

// LOADERS //
import { getPropertiesLoader, getPropertyByIdLoader } from './loaders';

// STYLING //
import './style.css';
import 'semantic-ui-css/semantic.min.css'

// ROUTER //
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "form",
        element: <NewPropertyForm />
      },
      {
        path: "properties",
        element: <PropertyList />,
        loader: getPropertiesLoader
      },
      {
        path: "properties/:id",
        element: <PropertyPage />,
        loader: getPropertyByIdLoader
      }
    ]
  }
])

// RENDER IN ROOT //
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );
