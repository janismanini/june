import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const loggedInToken = localStorage.getItem("token");
  const [projects, setProjects] = useState();

  // if not logged in, redirect to login page
  if (!loggedInToken) {
    return <Navigate replace to="/login" />;
  } else {
    // else fetch projects from API
    useEffect(() => {
      const fetchProjects = async () => {
        const request = await fetch("/api/v2/project", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loggedInToken}`,
          },
        })
          .then((response) => response.json())
          .then((data) => setProjects(data));
      };
      fetchProjects();
    }, []);
  }
  if (projects === undefined) {
    return null;
  }
  // sort projects via id's
  const projectsSorted = projects.data.sort((a, b) => (a.id < b.id ? -1 : 1));

  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <ul className="projects__list">
        {/* display each project title */}
        {projectsSorted.map((project) => (
          <li key={project.key} className="projects__list-item">
            <h2 className="projects__list-item-title">{project.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
