import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import DashboardNavBar from "../components/DashboardNavBar";
import { PiWarningDuotone } from "react-icons/pi";
import axios from "axios";
import "../pages/inbox.css";
import { Link } from "react-router-dom";

export default function Inbox() {
  const { user } = useContext(UserContext);

  const displayMessages = async () => {
    if (!user) return;
    try {
      const res = await axios.get("/getmessages");
      //reverse the array to display the latest message first
      res.data.reverse();

      // console.log("Displaying messages by their id"); // !!!!   this should be commented out
      // console.log(res.data); // !!!!   this should be commented out

      //if user email is == to the recipient of the message
      // then display the message
      const messagescontainer = document.getElementById("messagescontainer");
      messagescontainer.innerHTML = "";
      res.data.forEach((message) => {
        if (message.recipient === user.email) {
          const messageDiv = document.createElement("div");
          messageDiv.innerHTML = `
       
          <div class="messagesWindow">
          <div class="messagesCard">
            <h3 class="messagesDate">${message.created_at}</h3>
            <p class="messagesText">${message.message}</p>
            </div>
          </div>
         
        `;
          messagescontainer.appendChild(messageDiv);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  displayMessages();

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
            <h1 className="text-center text-2xl font-bold">
              Notifications from Admin
            </h1>
            <button
              onClick={displayMessages}
              className="btn2 flex justify-center items-center m-auto py-2 px-4 mt-4 mb-12"
            >
              Refresh
            </button>

            <div id="messagescontainer"></div>
          </div>
        </>
      )}
    </>
  );
}
