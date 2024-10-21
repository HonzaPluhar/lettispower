import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      {!user && <Link to="/register">Register</Link>}
      {!user && <Link to="/login">Login</Link>}
      {!!user && <Link to="/profile">Profile</Link>}
      {!!user && <Link to="/logout">Logout</Link>}
      {!!user && <Link to="/dashboard">Dashboard</Link>}
    </nav>
  );
}
