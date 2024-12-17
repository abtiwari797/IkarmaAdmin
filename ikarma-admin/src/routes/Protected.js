import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Protected = ({ children }) => {
  const authToken = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/"); // Redirect to login if no token
    }
  }, [authToken, navigate]);

  // Show spinner while checking for auth
  if (!authToken) {
    return <Spinner />;
  }

  // Render children when token exists
  return <>{children}</>;
};

export default Protected;
