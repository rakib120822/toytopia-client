import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";

function Navbar() {
  const { loading, setUser, user, logOut,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (user) {
      logOut()
        .then(() => {
          toast.success("Successfully Sign Out");
          setUser(null);
          setLoading(false);
        })
        .catch((err) => toast.error(err.message));
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <nav className="navbar shadow-sm bg-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <Link className="font-extrabold text-xl">
          <span className="text-[#6EC1E4]">Toy</span>Topia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-5 ">
          <li>
            <NavLink to="/" className="font-semibold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={"font-semibold"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={"font-semibold"}>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        {!loading ? (
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar relative inline-block group"
          >
            <div className="w-10 rounded-full overflow-hidden">
              <img
                alt="User Avatar"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tooltip */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 my-1 w-max max-w-xs bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              {user?.displayName || "Full Toy Name"}
            </span>
          </div>
        ) : (
          <span className="loading loading-spinner loading-xl"></span>
        )}

        <button
          onClick={handleBtnClick}
          className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white"
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
