import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function Root() {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <Navbar />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Root;
