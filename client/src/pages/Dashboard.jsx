import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        <div>
          <h2>Please Login</h2>
          <p>You need to login to access this page</p>
        </div>
      )}

      {/* Dashboard content */}
      {/* When user logged in !!!! */}

      {user && (
        <>
          <div>
            <h1>Dashboard</h1>
            <h2>Welcome back {user.name}!</h2>
            <div>
              <p>Dashboard content goes here...</p>
              <p>There will be some super duper technology</p>
            </div>

            <form onSubmit={logout}>
              <button type="submit">Logout</button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
