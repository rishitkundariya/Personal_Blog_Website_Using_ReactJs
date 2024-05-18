import React, { useEffect, useState } from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/store/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoader(true);
      });
  }, []);

  return <>{loader ? <h2> Rajkot </h2> : <h1>Rishit Kundariya</h1>}</>;
}
