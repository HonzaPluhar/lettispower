import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  PiArchiveDuotone,
  PiChartBarDuotone,
  PiChatCenteredDotsDuotone,
  PiBugDroidDuotone,
  PiBriefcaseDuotone,
  PiAppWindowDuotone,
} from "react-icons/pi";

export default function DashboardNavBar() {
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
      <div className="justify-between w-full flex pb-12 gap-8 items-center">
        <h2 className="text-lg">
          Welcome back {user.role} {user.name}!
        </h2>

        <form onSubmit={logout}>
          <button type="submit" className="btn2">
            Logout
          </button>
        </form>
      </div>
      <div className="bg-gray-100 px-6 py-4 rounded-3xl shadow-lg mb-12">
        <nav className="w-full flex gap-12 font-bold items-center">
          <Link
            to="/dashboard"
            className="text-secondarycolor hover:fill-maincolor ease-in duration-100"
          >
            <PiChartBarDuotone size={25} className="m-auto" />
            <p className="hidden md:block">Home</p>
          </Link>
          <Link
            to="/inbox"
            className="text-secondarycolor hover:fill-maincolor ease-in duration-100"
          >
            <PiArchiveDuotone size={25} className="m-auto" />
            <p className="hidden md:block">Inbox</p>
          </Link>

          {user.role === "Admin" && (
            <Link
              to="/createmessage"
              className="text-secondarycolor hover:fill-maincolor ease-in duration-100"
            >
              <PiChatCenteredDotsDuotone size={25} className="m-auto " />
              <p className="hidden md:block">Create Message</p>
            </Link>
          )}
          {user.role === "Client" && (
            <Link
              to="/services"
              className="text-secondarycolor hover:fill-maincolor ease-in duration-100"
            >
              <PiBugDroidDuotone size={25} className="m-auto " />
              <p className="hidden md:block">Services</p>
            </Link>
          )}
          {user.role === "Client" && (
            <Link
              to="/projects"
              className="text-secondarycolor hover:fill-maincolor ease-in duration-100"
            >
              <PiBriefcaseDuotone size={25} className="m-auto " />
              <p className="hidden md:block">Projects</p>
            </Link>
          )}
          {user.role === "Admin" && (
            <Link
              to="/createproject"
              className="text-secondarycolor hover:fill-maincolor ease-in duration-100"
            >
              <PiAppWindowDuotone size={25} className="m-auto " />
              <p className="hidden md:block">New Project</p>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
