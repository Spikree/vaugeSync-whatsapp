import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {

  const location = useLocation();

  const token = localStorage.getItem("token");

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};

export default ProtectedRoutes;
