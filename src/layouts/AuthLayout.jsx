import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

function AuthLayout() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[calc(100%-335px)] w-11/12  mx-auto ">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default AuthLayout
