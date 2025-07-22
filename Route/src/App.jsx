import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portefolio from './components/Portefolio/Portefolio'


const routes = createBrowserRouter([
    {path:"/" , element:<MainLayout/> , children: [
    {index:true , element:<Home/>} ,     
    {path:"about" , element:<About/>} , 
    {path:"Portefolio" , element:<Portefolio/>},
    {path:"contact" , element:<Contact/>}
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
