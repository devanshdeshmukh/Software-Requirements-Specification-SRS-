// ProtectedRoutes.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("isLoggedIn"); // Simulated login check

//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
