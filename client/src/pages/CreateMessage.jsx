import { React, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import DashboardNavBar from "../components/DashboardNavBar";
import { UserContext } from "../context/userContext";

import { Link } from "react-router-dom";
import { PiWarningDuotone } from "react-icons/pi";

export default function CreateMessage() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState({
    recipient: "",
    message: "",
  });
  const createMessage = async (e) => {
    e.preventDefault();
    const { recipient, message } = data;
    try {
      const { data } = await axios.post("/createmessage", {
        recipient,
        message,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          recipient: "",
          message: "",
        });
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
              <div>
                <form onSubmit={createMessage} className="form1">
                  <h1>Create a message</h1>
                  <label>Recipient</label>
                  <input
                    type="email"
                    placeholder="enter recipient email..."
                    value={data.recipient}
                    onChange={(e) =>
                      setData({ ...data, recipient: e.target.value })
                    }
                  />
                  <label>Message</label>
                  <textarea
                    id="message"
                    type="text"
                    placeholder="enter message..."
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                  />
                  <button type="submit" className="btn1">
                    Submit
                  </button>
                </form>
              </div>
              <p className="text-center pt-6 text-gray-400 font-normal">
                Available classes for formatting the text:{" "}
                <span> .textRed .textBlue .textGreen .textBold</span>
              </p>
            </div>
          </>
        )}
      </>
    </>
  );
}
