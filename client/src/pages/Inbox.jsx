import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import DashboardNavBar from "../components/DashboardNavBar";
import { PiWarningDuotone } from "react-icons/pi";
import axios from "axios";

export default function Inbox() {
  const { user } = useContext(UserContext);

  const displayMessages = async () => {
    const res = await axios.get("/getmessages");
    console.log("Displaying messages by their id"); // !!!!   this should be commented out
    console.log(res.data); // !!!!   this should be commented out

    //if user email is == to the recipient of the message
    // then display the message
    const messagescontainer = document.getElementById("messagescontainer");
    messagescontainer.innerHTML = "";
    res.data.forEach((message) => {
      if (message.recipient === user.email) {
        const messageDiv = document.createElement("div");
        messageDiv.innerHTML = `
       
          <div>
            <h3>${message.created_at}</h3>
            <p>${message.message}</p>
          </div>
         
        `;
        messagescontainer.appendChild(messageDiv);
      }
    });
  };

  //call the displayMessages function on page load
  displayMessages();

  return (
    <>
      {/* When no user logged in */}
      {!user && (
        <div className="flex flex-col items-center pt-8">
          <PiWarningDuotone size={50} className="text-secondarycolor" />
          <h2>Please Login</h2>
          <p>You need to login to access this page</p>
        </div>
      )}

      {/* Dashboard content */}
      {/* When user logged in !!!! */}

      {user && (
        <>
          <DashboardNavBar />
          <div>
            <h1>Inbox</h1>
            <button onClick={displayMessages} className="btn1">
              Refresh
            </button>

            <div className="">
              <div id="messagescontainer"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
