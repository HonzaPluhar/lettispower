import { React, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import DashboardNavBar from "../components/DashboardNavBar";
import { UserContext } from "../../context/UserContext";

import { Link } from "react-router-dom";
import { PiWarningDuotone } from "react-icons/pi";

export default function CreateProject() {
  const { user } = useContext(UserContext);

  const [data, setData] = useState({
    title: "",
    description: "",
    progression: 0,
    status: "",
    trackTimeUrl: "",
    downloadUrl: "",
    assignetTo: "",
    projectOwner: "",
  });

  const createProject = async (e) => {
    e.preventDefault();
    const {
      title,
      description,
      progression,
      status,
      trackTimeUrl,
      downloadUrl,
      assignetTo,
      projectOwner,
    } = data;
    try {
      const { data } = await axios.post("/createproject", {
        title,
        description,
        progression,
        status,
        trackTimeUrl,
        downloadUrl,
        assignetTo,
        projectOwner,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          title: "",
          description: "",
          progression: 0,
          status: "waiting",
          trackTimeUrl: "",
          downloadUrl: "",
          assignetTo: "",
          projectOwner: "",
        });
        toast.success("Project created successfully");
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

        {/* Create project */}
        {/* When user logged in !!!! */}

        {user && (
          <>
            <DashboardNavBar />
            <div>
              <div>
                <form onSubmit={createProject} className="form1">
                  <h1>Create a new project</h1>
                  <label>Project name</label>
                  <input
                    type="text"
                    placeholder="enter project name..."
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                  />
                  <label>Project description</label>
                  <textarea
                    type="text"
                    placeholder="enter project description..."
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  />
                  <label>Project progression</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    placeholder="enter project progression..."
                    value={data.progression}
                    onChange={(e) =>
                      setData({ ...data, progression: e.target.value })
                    }
                  />
                  <p className="text-gray-400 mb-4 text-center">
                    {data.progression}%
                  </p>

                  <label>Project status</label>
                  <select
                    value={data.status}
                    onChange={(e) =>
                      setData({ ...data, status: e.target.value })
                    }
                  >
                    <option value="waiting">Waiting</option>
                    <option value="in progress">In progress</option>
                    <option value="finished">Finished</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <label>Track time URL</label>
                  <input
                    type="text"
                    placeholder="enter track time URL..."
                    value={data.trackTimeUrl}
                    onChange={(e) =>
                      setData({ ...data, trackTimeUrl: e.target.value })
                    }
                  />

                  <label>Download URL</label>
                  <input
                    type="text"
                    placeholder="enter download URL..."
                    value={data.downloadUrl}
                    onChange={(e) =>
                      setData({ ...data, downloadUrl: e.target.value })
                    }
                  />

                  <label>Assign to</label>
                  <input
                    type="email"
                    placeholder="enter owner of the project email..."
                    value={data.assignetTo}
                    onChange={(e) =>
                      setData({
                        ...data,
                        assignetTo: e.target.value,
                        projectOwner: e.target.value,
                      })
                    }
                  />

                  <button type="submit" className="btn1">
                    {" "}
                    Create project{" "}
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
}
