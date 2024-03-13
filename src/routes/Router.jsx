import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import Register from "../components/Register";
import Booking from "../components/Booking";
import BookService from "../components/BookService";
import PrivateRoutes from "./PrivateRoutes";

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
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Register></Register>
        },
        {
          path:'book/:id',
          element:<BookService></BookService>,
          loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
        },
        {
          path:'booking',
          element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
          
        }
      ]
    },
  ]);