import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Profile from "../pages/home/Profile";
import DetailsPage from "../pages/home/DetailsPage";
import Login from "../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/auth/Register";
import Products from "../pages/home/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ()=> fetch("/data.json")
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
        loader: ()=> fetch("/data.json")
      },{
        path:"/products",
        loader: ()=> fetch("/data.json"),
        element:<Products/>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
