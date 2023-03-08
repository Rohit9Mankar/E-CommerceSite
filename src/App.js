import React from 'react';
import Products from './Components/StorePage/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Components/Layout/RootLayout';
import About from './Components/AboutPage/About';

const router=createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
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
