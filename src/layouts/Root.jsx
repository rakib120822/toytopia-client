import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="min-h-[calc(100%-310px)] pt-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
