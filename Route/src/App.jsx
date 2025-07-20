import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'

const routes = createBrowserRouter([
    {path:"/" , element:<MainLayout/> , children: [
    {index:true , element:<h1>Welcome</h1>} ,     
    {path:"about" , element:<h1>About</h1>} , 
    {path:"Portefolio" , element:<h1>Portefolio</h1>},
    {path:"contact" , element:<h1 >Contact</h1>}
  ]}
])

function App() {  

  return (
    <>
      <RouterProvider router={routes}/> 
   </>
  )
}

export default App
