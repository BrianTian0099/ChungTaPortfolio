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
      link: "https://drive.google.com/file/d/1J8C99hBFbrhMOkqv9ARYlPz27mY6M1qt/view?usp=sharing",
    },
    {
      id: 2,
      title: "作品二",
      technologies: "HTML, Sass, jQuery",
      description: "這是作品二的描述，展示了創建的靜態網頁和動態效果。",
      bgImage: project2,
      link: "https://example.com/project2.pdf",
    },
    {
      id: 3,
      title: "作品三",
      technologies: "Vue.js, TailwindCSS",
      description: "這是作品三的描述，專注於構建響應式設計和元件化開發。",
      bgImage: project3,
      link: "https://example.com/project3.pdf",
    },
    {
      id: 4,
      title: "作品四",
      technologies: "Node.js, Express, MongoDB",
      description: "這是作品四的描述，展示了使用全棧技術的 REST API 開發。",
      bgImage: project4,
      link: "https://example.com/project4.pdf",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
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
                <div className="project-text">
                  <h2>{project.title}</h2>
                  <h3>使用技術：{project.technologies}</h3>
                  <p>{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  查看PDF
                </a>
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
