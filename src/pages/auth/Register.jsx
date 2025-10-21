import React from "react";
import { Link } from "react-router";

function Register() {
  return (
    <div className="  h-full  py-5 ">
      <div className="hero ">
        <div className="hero-content">
          <div className="card bg-base-100  w-full shadow-lg">
            <div className="card-body p-5">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <form className="text-black">
                <fieldset className="fieldset gap-4">
                  <label className="floating-label  text-black font-semibold">
                    <span>Name</span>

                    <input
                      type="text"
                      className="input placeholder:text-black/40 "
                      placeholder="Name"
                      name="name"
                    />
                  </label>
                  <label className="floating-label text-black font-semibold">
                    <span>Photo URL</span>

                    <input
                      type="text"
                      className="input placeholder:text-black/40 "
                      placeholder="Photo URL"
                      name="photoURL"
                    />
                  </label>
                  <label className="floating-label text-black font-semibold">
                    <span>Email</span>

                    <input
                      type="email"
                      className="input placeholder:text-black/40 "
                      placeholder="Username or Email"
                      name="email"
                    />
                  </label>
                  <label className="floating-label text-black font-semibold">
                    <span>Password</span>
                    <input
                      type="password"
                      className="input placeholder:text-black/40 "
                      placeholder="Password"
                      name="password"
                    />
                  </label>
                  

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
                    <Link className="text-[#297BE6] underline font-semibold">
                      Forget Password
                    </Link>
                  </div>

                  <button className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white mt-2">Register</button>
                </fieldset>
              </form>

              <p className="text-center font-semibold">
                Have a account?{" "}
                <Link to={"/auth/login"} className="text-[#297BE6] underline">
                  Please Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google */}
      <div className="text-center w-full pt-5">
        <button className="btn btn-lg  bg-white text-black border-[#e5e5e5]">
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
  );
}

export default Register;
