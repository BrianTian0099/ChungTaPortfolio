import { useState } from "react";
import "./ProjectsSection.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "作品一",
      technologies: "React, CSS, JavaScript",
      description: "這是作品一的描述，展示了使用 React 開發的交互式應用程式。",
      bgImage: project1,
    },
    {
      id: 2,
      title: "作品二",
      technologies: "HTML, Sass, jQuery",
      description: "這是作品二的描述，展示了創建的靜態網頁和動態效果。",
      bgImage: project2,
    },
    {
      id: 3,
      title: "作品三",
      technologies: "Vue.js, TailwindCSS",
      description: "這是作品三的描述，專注於構建響應式設計和元件化開發。",
      bgImage: project3,
    },
    {
      id: 4,
      title: "作品四",
      technologies: "Node.js, Express, MongoDB",
      description: "這是作品四的描述，展示了使用全棧技術的 REST API 開發。",
      bgImage: project4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="projects-section">
      <button className="nav-button left" onClick={handleLeftClick}>
        ←
      </button>
      <div className="carousel">
        {projects.map((project, index) => {
          const position = index - currentIndex;

          return (
            <div
              key={project.id}
              className={`project-container ${
                position === 0 ? "active" : position > 0 ? "right" : "left"
              }`}
              style={{
                transform: `translateX(${position * 100}%)`,
              }}
            >
              <div className="card">
                <img src={project.bgImage} alt={project.title} />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <h3>使用技術：{project.technologies}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="nav-button right" onClick={handleRightClick}>
        →
      </button>
    </section>
  );
};

export default ProjectsSection;
