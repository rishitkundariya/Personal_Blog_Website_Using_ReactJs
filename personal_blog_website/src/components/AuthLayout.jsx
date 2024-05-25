import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.authStatus.status);
  const navigator = useNavigate();
  const [loder, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    if (authentication && authentication !== authStatus) {
      navigator("/login");
    } else if (!authentication && authentication !== authStatus) {
      navigator("/");
    }
  }, [authStatus, authentication, navigator]);
  return loder ? <h1>Loading ..</h1> : <>{children}</>;
}
