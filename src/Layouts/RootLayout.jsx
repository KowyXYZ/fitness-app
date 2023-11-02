import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/GeneralComp/Navbar'

function RootLayout() {
  return (
    <div className='w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
