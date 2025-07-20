import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
   <>
   <Header/>

   <div className='pt-5 mt-5'>
    <Outlet/>
   </div>
   </>
  )
}
