import React from "react";
import { Link } from "react-router-dom";

export default function DashboardNavBar() {
  return (
    <>
      <div>
        <nav>
          <Link to="/messages">Messages</Link>
        </nav>
      </div>
    </>
  );
}
