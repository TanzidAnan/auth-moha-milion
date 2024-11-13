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
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainRoot></MainRoot>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element:<Signup></Signup>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
