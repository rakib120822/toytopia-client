import React, { useContext } from "react";
import { Link } from "react-router";

import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

function Register() {
  const { register, profileUpdate, googleSignUp } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const minLength = /.{6,}/;

    if (!hasUppercase.test(password)) {
      toast.error("Password must have at least 1 uppercase letter.");
      return;
    }
    if (!hasLowercase.test(password)) {
      toast.error("Password must have at least 1 lowercase letter.");
      return;
    }
    if (!minLength.test(password)) {
      toast.error("Password must be at least 6 characters long.");
      return;
    } else {
      register(email, password)
        .then(() => {
          profileUpdate(displayName, photoURL)
            .then(() => {})
            .catch((err) => {
              toast.error(err.message);
            });
          toast.success("Successfully Created Account!");
          e.target.reset();
        })
        .catch((err) => toast.error(err.message));
    }
  };

  const handleGoogleSignup = () => {
    googleSignUp()
      .then(() => toast.success("Successfully Created Account!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-lg">
      <div className="card-body p-5">
        <h1 className="text-4xl font-bold text-center mb-1">Register Now!</h1>

        <form onSubmit={handleRegister} className="text-black">
          <fieldset className="fieldset gap-4">
            <label className="label text-black font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input placeholder:text-black/40"
              placeholder="Name"
            />

            <label className="label text-black font-semibold">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input placeholder:text-black/40"
              placeholder="Photo URL"
              required
            />

            <label className="label text-black font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input placeholder:text-black/40"
              placeholder="Email"
            />

            <label className="label text-black font-semibold">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input placeholder:text-black/40"
              placeholder="Password"
            />

            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#297BE6] to-[#61D2E8] text-white mt-1"
            >
              Register
            </button>
          </fieldset>
        </form>

        <p className="text-center font-semibold mt-1">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-[#297BE6] underline">
            Please Login
          </Link>
        </p>

        <div className="flex gap-1 items-center px-5 my-1">
          <div className="w-full border-t border-black/70"></div>
          <p>Or</p>
          <div className="w-full border-t border-black/70"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="btn btn-lg bg-white text-black border-[#e5e5e5] w-full"
        >
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
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default Register;
