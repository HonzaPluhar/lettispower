import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { PiListBold } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const handleNav = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);
  return (
    <>
      <nav className="navbar">
        <div className="container max-w-3xl mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              MCD
              <p className="text-maincolor font-sans text-sm font-light">
                My clients dashboard
              </p>
            </Link>
          </div>
          {/* Normal menu */}
          <div className="hidden md:block">
            <div className="links">
              <Link to="/">Home</Link>
              {!user && <Link to="/register">Register</Link>}
              {!user && <Link to="/login">Login</Link>}
              {!!user && <Link to="/dashboard">Dashboard</Link>}
            </div>
          </div>
          {/* Hamburger */}
          <div className="block md:hidden">
            <PiListBold
              size={25}
              className="fill-white hover:fill-maincolor ease-in duration-200"
              onClick={handleNav}
            />
          </div>
          {/* Mobile menu */}
          <div
            className={
              menu
                ? "fixed left-0 top-0 w-[50%] h-screen bg-secondarycolor shadow-md p-10 ease-in-out duration-500"
                : "fixed left-[-100%] top-0 left-0 h-screen w-[65%]  p-10 ease-in duration-500 "
            }
          >
            <div className="flex flex-col justify-start items-left h-full mt-24">
              {/* Close button */}
              <div className="flex w-full justify-end ml-14 mb-8">
                <div onClick={handleNav} className="cursor-pointer">
                  <IoIosCloseCircleOutline
                    size={38}
                    className="bg-secondarycolor rounded-full px-1 py-1 fill-white hover: hover:fill-maincolor ease-in duration-200"
                  />
                </div>
              </div>
              {/* Logo */}
              <div className="logo mb-8">
                <Link to="/">
                  MCD
                  <p className="text-maincolor font-sans text-sm font-light">
                    My clients dashboard
                  </p>
                </Link>
              </div>
              {/* Links */}
              <Link
                to="/"
                className="text-white text-2xl font-normal py-4 hover:text-maincolor"
                onClick={handleNav}
              >
                Home
              </Link>
              {!user && (
                <Link
                  to="/register"
                  className="text-white text-2xl font-normal py-4 hover:text-maincolor"
                  onClick={handleNav}
                >
                  Register
                </Link>
              )}
              {!user && (
                <Link
                  to="/login"
                  className="text-white text-2xl font-normal py-4 hover:text-maincolor"
                  onClick={handleNav}
                >
                  Login
                </Link>
              )}
              {!!user && (
                <Link
                  to="/dashboard"
                  className="text-white text-2xl font-normal py-4 hover:text-maincolor"
                  onClick={handleNav}
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
