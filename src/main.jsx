import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Compontents/Roots.jsx';
import Home from './Compontents/Home.jsx';
import Login from './Compontents/Login.jsx';
import Register from './Compontents/Register.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Orders from './Compontents/Orders.jsx';
import PrivateRouts from './routes/PrivateRouts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRouts><Orders></Orders></PrivateRouts>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
