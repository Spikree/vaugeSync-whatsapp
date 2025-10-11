import { Button } from "@/components/ui/button";
import { AdminStore } from "@/store/AdminStore"
import { AuthStore } from "@/store/AuthStore";
import { useEffect } from "react";

const AdminDashboard = () => {
    const {getUsers} = AdminStore();
    const {logout, checkAuth} = AuthStore();

    useEffect(() => {
        getUsers();
    },[getUsers])

    const logoutUser = () => {
      logout();
      checkAuth();
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