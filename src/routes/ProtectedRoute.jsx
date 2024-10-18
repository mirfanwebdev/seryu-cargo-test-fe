import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/getLocalStorage";

function ProtectedRoute({ children }) {
  const accessToken = getToken();
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children || <Outlet />;
}

export default ProtectedRoute;
