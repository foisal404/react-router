import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//1. import 
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Root from './components/Root/Root';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';

//2. declaire path Route set
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/service",
//     element: <Service></Service>
//   }

// ]);


const router=createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <Root></Root>
      },
      {
        path:"/service",
        element: <Service></Service>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader:()=> fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path:"/user/:userid",
        element:<UserDetails></UserDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
      },
      {
        path: '*',
        element:<h1>404 error</h1>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
