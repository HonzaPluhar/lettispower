import { React, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Messages() {
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
        setData({});
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={createMessage}>
          <label>Recipient</label>
          <input
            type="email"
            placeholder="enter recipient email..."
            value={data.recipient}
            onChange={(e) => setData({ ...data, recipient: e.target.value })}
          />
          <label>Message</label>
          <input
            type="text"
            placeholder="enter message..."
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
