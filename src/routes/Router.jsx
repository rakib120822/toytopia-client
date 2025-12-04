import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Profile from "../pages/home/Profile";
import DetailsPage from "../pages/home/DetailsPage";
import Login from "../pages/auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/auth/Register";
import Products from "../pages/home/Products";
import ErrorPage from "../pages/error/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";
import Spinner from "../components/Spinner";
import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
import MyToy from "../pages/home/MyToy";
import About from "../pages/About us/About";
import Contact from "../pages/Contact us/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },
      {
        path: "/profile",

        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {},
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/data.json").then((res) => res.json()),
        element: <DetailsPage />,
      },
      {
        path: "/products",
        loader: () => fetch("/data.json").then((res) => res.json()),
        element: <Products />,
      },
      {
        path: "/mytoy",
        loader: () => fetch("/data.json").then((res) => res.json()),
        element: (
          <PrivateRoute>
            <MyToy />
          </PrivateRoute>
        ),
      },
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
      {
        path: "/auth/forget-password",
        element: <ForgetPasswordPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
