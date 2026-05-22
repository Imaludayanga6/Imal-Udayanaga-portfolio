import { Navigate } from "react-router-dom";
import { authService } from "../utils/authService";

// Protected route that requires authentication
const ProtectedRoute = ({ children }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
