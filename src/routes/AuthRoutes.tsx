import { Outlet, Navigate, useLocation } from "react-router-dom";

const AuthRoutes = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};

export default AuthRoutes;
