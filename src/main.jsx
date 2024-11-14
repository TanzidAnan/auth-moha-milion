import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './compontents/Root/MainRoot';
import Home from './compontents/Home/Home';
import Login from './compontents/Login/Login';
import Signup from './compontents/Signup/Signup';
import AuthProviders from './Providers/AuthProviders';
import Orbers from './compontents/Orbers/Orbers';
import PrivateRoutes from './routes/PrivateRoutes';
import Prifile from './compontents/Prifile/Prifile';
import PrivateRoot from './routes/PrivateRoot/PrivateRoot';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
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
        path: '/resister',
        element: <Signup></Signup>,
      },
      {
        path:'/orders',
        element:<PrivateRoutes><Orbers></Orbers></PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoot><Prifile></Prifile></PrivateRoot>
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
