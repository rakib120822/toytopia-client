import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import AuthContext from "../context/AuthContext";

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  console.log(loading);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const profileUpdate = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const userInfo = {
    user,
    setUser,
    logIn,
    register,
    logOut,
    profileUpdate,
    loading,
    setLoading,
  };

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth,user=>{
        setUser(user);
        setLoading(false);
    })

    return ()=>{
        unsubscribe();
    }

  },[])

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
