import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardNavBar from "../components/DashboardNavBar";
import { PiWarningDuotone } from "react-icons/pi";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get("/logout");

      if (response.ok) {
        toast.success("Logged out successfully");
        navigate("/login"); //navigate to loginpage
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* When no user logged in */}
      {!user && (
        <div className="flex flex-col items-center pt-8">
          <PiWarningDuotone size={50} className="text-secondarycolor" />
          <h2>Please Login</h2>
          <p>You need to login to access this page</p>
        </div>
      )}

      {/* Dashboard content */}
      {/* When user logged in !!!! */}

      {user && (
        <>
          <div className="justify-between w-full flex pb-12 gap-8 items-center">
            <h2>Welcome back {user.name}!</h2>
            <form onSubmit={logout}>
              <button type="submit" className="btn2">
                Logout
              </button>
            </form>
          </div>

          <DashboardNavBar />
          <div>
            <h1>Dashboard</h1>

            <div>
              <p>Dashboard content goes here...</p>
              <p>There will be some super duper technology</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
