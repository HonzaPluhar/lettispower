import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({}); //reset form

        //refresh the page
        window.location.reload();
        navigate("/dashboard"); //navigate to home page
        toast.success("Login successful");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="mt-16">
        <form onSubmit={loginUser} className="form1">
          <h1>Login</h1>
          <label>Email</label>
          <input
            type="email"
            placeholder="enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit" className="btn1">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
