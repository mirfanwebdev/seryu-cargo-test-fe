import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/login" replace />;
  }
  return children || <Outlet />;
}

export default ProtectedRoute;
