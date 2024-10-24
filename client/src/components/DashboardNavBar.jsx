import React from "react";
import { Link } from "react-router-dom";

export default function DashboardNavBar() {
  return (
    <>
      <div className="bg-gray-100 px-6 py-4 rounded-3xl shadow-lg mb-12">
        <nav className="w-full flex gap-6 font-bold">
          <Link to="#" className="text-secondarycolor">
            Inbox
          </Link>
          <Link to="/messages" className="text-secondarycolor">
            Create Message
          </Link>
        </nav>
      </div>
    </>
  );
}
