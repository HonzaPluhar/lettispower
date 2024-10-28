import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import DashboardNavBar from "../components/DashboardNavBar";
import { PiWarningDuotone } from "react-icons/pi";
import axios from "axios";
import { Link } from "react-router-dom";
import "../pages/projects.css";

export default function Projects() {
  const { user } = useContext(UserContext);

  const displayProjects = async () => {
    if (!user) return;
    try {
      const res = await axios.get("/getprojects");
      //   console.log(res.data);
      //reverse the array to display the latest project first
      res.data.reverse();

      const projectscontainer = document.getElementById("projectscontainer");
      projectscontainer.innerHTML = "";
      res.data.forEach((projects) => {
        if (projects.projectOwner === user.email) {
          // Nastavení třídy podle statusu
          let statusClass = "";
          switch (projects.status) {
            case "waiting":
              statusClass = "status-waiting";
              break;
            case "in progress":
              statusClass = "status-in-progress";
              break;
            case "finished":
              statusClass = "status-finished";
              break;
            case "cancelled":
              statusClass = "status-cancelled";
              break;
            default:
              break;
          }

          const projectDiv = document.createElement("div");
          projectDiv.innerHTML = `
            <div class="projectWindow">
            <div class="projectCard">
              <div class="grid grid-cols-1 md:grid-cols-2">
            <h3 class="projectTitle">${projects.title}</h3>
             <p class="projectStatus ${statusClass} w-full mb-6 md:w-48">
  ${projects.status}
</p>
   </div>
               
              <p class="projectOwner">${projects.projectOwner}</p>
              <p class="projectCreated_at mb-4">${projects.created_at}</p>     
              <p class="projectDescription">${projects.description}</p>
              <div class="projectSliderProgression">
                <div class="projectSliderFill" style="width: ${projects.progression}%;"></div>
              </div>
                <p class="projectProgression text-right">${projects.progression}%</p>
             <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="grid grid-cols-1 md:grid-cols-1">
                <p>Track progress link:</p>
                
              <a href="${projects.trackTimeUrl}" class="projectTrackTimeUrl">${projects.trackTimeUrl}</a>
              </div>
               <div class="grid grid-cols-1 md:grid-cols-1">
              <p>Essential link:</p>
              <a href="${projects.downloadUrl}" class="projectDownloadUrl">${projects.downloadUrl}</a>
              </div>
            </div>

            </div>
          </div>
          `;
          projectscontainer.appendChild(projectDiv);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  displayProjects();

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
            <h1 className="text-center text-2xl font-bold">Your projects</h1>

            <div id="projectscontainer"></div>
          </div>
        </>
      )}
    </>
  );
}
