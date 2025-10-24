import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";


function ForgetPasswordPage() {
  const { loginEmail, setLoginEmail, resetPassword } = useContext(AuthContext);

  const handleOnclick = () => {
    resetPassword(loginEmail)
      .then(
        () => (window.location.href = "https://mail.google.com/mail/u/0/#inbox")
      )
      .catch((err) => toast(err.message));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={loginEmail ? loginEmail : ""}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <button
            className="btn  bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white mt-4"
            onClick={handleOnclick}
          >
            Reset Password
          </button>
        </fieldset>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
