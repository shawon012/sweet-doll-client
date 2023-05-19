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
            element: <SingleToy></SingleToy>
        },
        {
            path: 'products',
            element: <AllToy></AllToy>
        },
        {
            path: 'addProduct',
            element: <AddaToy></AddaToy>
        },
        {
            path: 'mytoys',
            element: <MyToys></MyToys>
        }
      ]
    },
    {
        path: '*',
        element: <Notfound></Notfound>
    }
  ])
  export default router;