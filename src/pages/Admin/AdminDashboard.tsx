import { Button } from "@/components/ui/button";

import { AuthStore } from "@/store/AuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const {logout, checkAuth} = AuthStore();
    const navigator = useNavigate();

    useEffect(() => {
      checkAuth();
    },[checkAuth])

    const logoutUser = () => {
      logout().then(() => {
        navigator("/login")
      })
    }
  return (
    <div>
      <Button onClick={logoutUser}>
        logout
      </Button>
    </div>
  )
}

export default AdminDashboard