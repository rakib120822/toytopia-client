import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="w-11/12 mx-auto  h-screen">
      <Navbar />
      <div className="min-h-[calc(100%-335px)] py-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
