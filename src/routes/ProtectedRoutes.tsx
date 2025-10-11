import { AuthStore } from "@/store/AuthStore";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { authUser, isCheckingAuth } = AuthStore();

  const location = useLocation();

  if (isCheckingAuth) {
    return null;
  }

  return authUser ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};

export default ProtectedRoutes;
