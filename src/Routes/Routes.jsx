import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authorize/Login";
import Signup from "../Pages/Authorize/Signup";
import SingleToy from "../Toys/SingleToy/SingleToy";
import AllToy from "../Toys/AllToys/AllToy";
import AddaToy from "../Toys/AddaToy/AddaToy";
import MyToys from "../Toys/MyToys/MyToys";
import Notfound from "../Notfound/Notfound";
import Blog from "../Toys/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Update from "../Toys/MyToys/Update";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signUp',
            element: <Signup></Signup>
        },
        {
            path: 'products/:id',
            element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader: ({params}) => fetch(`https://sweet-doll-server.vercel.app/products/${params.id}`)
        },
        {
            path: 'mytoys/updateToy/:id',
            element: <PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params}) => fetch(`https://sweet-doll-server.vercel.app/products/${params.id}`)
        },
        {
            path: 'products',
            element: <AllToy></AllToy>
        },
        {
            path: 'addProduct',
            element: <PrivateRoute><AddaToy></AddaToy></PrivateRoute>
        },
        {
            path: 'mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: 'blogs',
            element: <Blog></Blog>
        }
      ]
    },
    {
        path: '*',
        element: <Notfound></Notfound>
    }
  ])
  export default router;