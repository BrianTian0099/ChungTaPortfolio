import { useState } from "react";
import "./ProjectsSection.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const ProjectsSection = () => {
  const projects = [
    { title: "穿戴式裝置互動設計", description: "作品一的描述", bgImage: project1 },
    { title: "作品二", description: "作品二的描述", bgImage: project2 },
    { title: "作品三", description: "作品三的描述", bgImage: project3 },
    { title: "作品四", description: "作品四的描述", bgImage: project4 },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleLeftClick = () => {
    if (currentProject > 0) {
      setCurrentProject((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (currentProject < projects.length - 1) {
      setCurrentProject((prev) => prev + 1);
    }
  };

  return (
    <section className="projects">
      <div
        className="projects-container"
        style={{ transform: `translateX(-${currentProject * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div
            className="project"
            key={index}
            style={{
              backgroundImage: `url(${project.bgImage})`,
            }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* 左右切换按钮 */}
      <button className="nav-button left-button" onClick={handleLeftClick}>
        ←
      </button>
      <button className="nav-button right-button" onClick={handleRightClick}>
        →
      </button>

      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{
            width: `${((currentProject + 1) / projects.length) * 100}%`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
