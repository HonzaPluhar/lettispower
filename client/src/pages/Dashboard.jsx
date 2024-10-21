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
        navigate("/login");
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
        <div>
          <h1>Dashboard</h1>
          {!!user && <h2>hI {user.name}!</h2>}
          <div>
            <p>Dashboard content goes here...</p>
          </div>

          {!!user && (
            <form onSubmit={logout}>
              <button type="submit">Logout</button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
