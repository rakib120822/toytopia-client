import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";


import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";



function Login() {
  const {setLoading,  setUser,logIn ,googleSignUp} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("login successful");
         e.target.reset();
        setLoading(false);
        navigate(`${location.state? location.state : '/'}`)
      })
      .catch((err) => toast.error(err));
      
  };

  const handleGoogleSignup = () => {
    googleSignUp()
      .then(() => navigate(`${location.state? location.state : '/'}`))
      .catch((err) => toast.error(err));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
      <div className="card-body border border-gray-200  ">
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">Email</label>
            <input
              type="email"
              className="input placeholder:text-black/40"
              placeholder="Username or Email"
              name="email"
              required
            />
            <label className="label text-black font-semibold">Password</label>
            <input
              type="password"
              className="input placeholder:text-black/40"
              placeholder="Password"
              name="password"
              required
            />
            <div className="flex justify-between items-center mt-2">
              <div>
                <label className="label font-semibold text-black">
                  <input
                    type="checkbox"
                    className="checkbox border-2 border-black"
                  />
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-[#297BE6] underline font-semibold"
              >
                Forget Password
              </button>
            </div>

            <button className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white mt-2">
              Login
            </button>
          </fieldset>
        </form>

        <p className="text-center font-semibold">
          Don't have a account?{" "}
          <Link to={"/auth/register"} className="text-[#297BE6] underline">
            Create an account
          </Link>
        </p>

        <div className="flex gap-1 items-center px-5 my-2">
          <div className="w-full h-1 border-t border-black/70"></div>
          <p>Or</p>
          <div className="w-full border-t border-black/70"></div>
        </div>
        <div className="flex flex-col gap-2">
          {/* Google */}
          <button onClick={handleGoogleSignup} className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
