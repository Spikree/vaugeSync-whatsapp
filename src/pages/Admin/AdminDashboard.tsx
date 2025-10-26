import { Button } from "@/components/ui/button";

import { AuthStore } from "@/store/AuthStore";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    const {logout} = AuthStore();
    const navigator = useNavigate();

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