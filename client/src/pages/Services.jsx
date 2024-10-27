import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import DashboardNavBar from "../components/DashboardNavBar";
import { PiWarningDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Services() {
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
          <div className="w-full pt-8">
            <h1 className="text-4xl font-bold mb-12 text-center text-primary">
              My Services
            </h1>
            {/* Service 1 */}
            <div className="flex justify-center m-auto px-4 mb-12">
              <div className="bg-white p-8 max-w-md rounded-lg shadow-lg border border-gray-200 min-w-[100%] md:min-w-[80%]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ">
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Subscription{" "}
                      <span className="text-gray-500 font-normal text-sm">
                        <br /> (1.499,- czk/monthly)
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    {user.service1 ? (
                      <p className="text-green-600 font-bold bg-green-100 px-4 py-2 rounded-full shadow-sm">
                        Active
                      </p>
                    ) : (
                      <p className="text-red-600 font-bold bg-red-100 px-4 py-2 rounded-full shadow-sm">
                        Not Active
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex justify-center m-auto px-4 mb-12">
              <div className="bg-white p-8 max-w-md rounded-lg shadow-lg border border-gray-200 min-w-[100%] md:min-w-[80%]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Backup to local and cloud storage{" "}
                      <span className="text-gray-500 font-normal text-sm">
                        <br /> (499,- czk/monthly)
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    {user.service2 ? (
                      <p className="text-green-600 font-bold bg-green-100 px-4 py-2 rounded-full shadow-sm">
                        Active
                      </p>
                    ) : (
                      <p className="text-red-600 font-bold bg-red-100 px-4 py-2 rounded-full shadow-sm">
                        Not Active
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex justify-center m-auto px-4 mb-12">
              <div className="bg-white p-8 max-w-md rounded-lg shadow-lg border border-gray-200 min-w-[100%] md:min-w-[80%]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Updates and maintenance{" "}
                      <span className="text-gray-500 font-normal text-sm">
                        <br /> (1.499,- czk/monthly)
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    {user.service3 ? (
                      <p className="text-green-600 font-bold bg-green-100 px-4 py-2 rounded-full shadow-sm">
                        Active
                      </p>
                    ) : (
                      <p className="text-red-600 font-bold bg-red-100 px-4 py-2 rounded-full shadow-sm">
                        Not Active
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}

            {/* <div className="flex justify-center m-auto px-4 mb-12">
              <div className="bg-white p-8 max-w-md rounded-lg shadow-lg border border-gray-200 min-w-[100%] md:min-w-[80%]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Updates and maintenance{" "}
                      <span className="text-gray-500 font-normal text-sm">
                        (monthly)
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    {user.service4 ? (
                      <p className="text-green-600 font-bold bg-green-100 px-4 py-2 rounded-full shadow-sm">
                        Active
                      </p>
                    ) : (
                      <p className="text-red-600 font-bold bg-red-100 px-4 py-2 rounded-full shadow-sm">
                        Not Active
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div> */}

            {/* Service 5 */}
            {/* 
            <div className="flex justify-center m-auto px-4 mb-12">
              <div className="bg-white p-8 max-w-md rounded-lg shadow-lg border border-gray-200 min-w-[100%] md:min-w-[80%]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Updates and maintenance{" "}
                      <span className="text-gray-500 font-normal text-sm">
                        (monthly)
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    {user.service5 ? (
                      <p className="text-green-600 font-bold bg-green-100 px-4 py-2 rounded-full shadow-sm">
                        Active
                      </p>
                    ) : (
                      <p className="text-red-600 font-bold bg-red-100 px-4 py-2 rounded-full shadow-sm">
                        Not Active
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div> */}
            {/* END of services */}
          </div>
        </>
      )}
    </>
  );
}
