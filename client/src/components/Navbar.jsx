import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { AiOutlineMenu } from "react-icons/ai";
import { SlClose } from "react-icons/sl";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const handleNav = () => {
    setNav(!menuOpen);
  };

  const { user } = useContext(UserContext);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">My Clients Dashboard</Link>
        </div>
        <nav>
          <div className="links">
            <Link to="/">Home</Link>
            {!user && <Link to="/register">Register</Link>}
            {!user && <Link to="/login">Login</Link>}

            {!!user && <Link to="/dashboard">Dashboard</Link>}
          </div>
        </nav>
      </div>
    </>
  );
}
