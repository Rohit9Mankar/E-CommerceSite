import React from 'react';
import Products from './Components/StorePage/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Components/Layout/RootLayout';
import About from './Components/AboutPage/About';
import Home from './Components/HomePage/Home';

const router=createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {path: '/home',element: <Home/>},
      {path:'/store' ,element: <Products/>},
      {path:'/about' ,element: <About/>}
    ],
  },
])

function App() {


  return (
   <RouterProvider router={router}/>

  );
}

export default App;
