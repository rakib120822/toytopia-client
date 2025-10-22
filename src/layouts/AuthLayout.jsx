import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow flex justify-center items-center py-5">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      <ToastContainer position="top-center"/>
    </div>
  );
}

export default AuthLayout;
