import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const { user, profileUpdate, setUser, loading, setLoading } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value || user?.displayName;
    const photoURL = e.target.photoURL.value || user?.photoURL;

    profileUpdate(displayName, photoURL)
      .then(() => {
        setIsEdit(false);
        setUser({ ...user, displayName, photoURL });
        toast.success("Update Successful");
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="py-30 ">
      <div className="hero ">
        {loading ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          <div className="hero-content flex-col lg:flex-row  shadow-2xl">
            <img
              src={`${user?.photoURL}`}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              {!isEdit ? (
                <div>
                  <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                  <p className="py-6">{user?.email}</p>
                  <button
                    onClick={() => setIsEdit(true)}
                    className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white"
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className=" p-10">
                  <fieldset className="fieldset ">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Name"
                      name="displayName"
                    />
                    <label className="label">Photo URL</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Photo URL"
                      name="photoURL"
                    />
                    <button
                      type="submit"
                      className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white mt-4"
                    >
                      update
                    </button>
                  </fieldset>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
