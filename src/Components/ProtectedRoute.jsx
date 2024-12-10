import { Navigate } from "react-router-dom";


const ProtectedRoute= ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  const isAuthenticatedSession = sessionStorage.getItem("token");

  if (!isAuthenticated && !isAuthenticatedSession) {
    return <Navigate to="/login" replace />;
  }

  return children; 
};

export default ProtectedRoute;
