import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user"); // Check login

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
