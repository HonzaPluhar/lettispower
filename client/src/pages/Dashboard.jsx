import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import DashboardNavBar from "../components/DashboardNavBar";
import { PiWarningDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <>
      {/* When no user logged in */}
      {!user && (
        <div className="flex flex-col items-center pt-8">
          <PiWarningDuotone size={50} className="text-secondarycolor" />
          <h2>Please Login</h2>
          <p>
            You need to <Link to="/login">login</Link> to access this page
          </p>
        </div>
      )}

      {/* Dashboard content */}
      {/* When user logged in !!!! */}

      {user && (
        <>
          <DashboardNavBar />
          <div>
            <h1>Dashboard</h1>

            <div>
              <p>Dashboard content goes here...</p>
              <p>There will be some super duper technology and main content</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
