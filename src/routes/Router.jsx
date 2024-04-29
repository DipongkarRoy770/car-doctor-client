import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import Register from "../components/Register";
import Booking from "../components/Booking";
import BookService from "../components/BookService";
import PrivateRoutes from "./PrivateRoutes";
import Service from "../components/Service";
import Section from "../components/Section";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'service',
          element:<PrivateRoutes><Service></Service></PrivateRoutes>
        },
        {
          path:'about',
          element:<Section></Section>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Register></Register>
        },
        {
          path:'book/:id',
          element:<PrivateRoutes><BookService></BookService></PrivateRoutes>,
          loader:({params})=>fetch(`https://car-doctor-server-beta-liart.vercel.app/cars/${params.id}`)
        },
        {
          path:'booking',
          element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
          
        }
      ]
    },
  ]);