import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";
import CreateMessage from "./pages/CreateMessage";
import Inbox from "./pages/Inbox";
import Services from "./pages/Services";
import CreateProject from "./pages/CreateProject";
import Projects from "./pages/Projects";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <div className="container px-4 pt-12 pb-12 min-h-screen max-w-xl mx-auto md:max-w-3xl">
        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createmessage" element={<CreateMessage />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/services" element={<Services />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
