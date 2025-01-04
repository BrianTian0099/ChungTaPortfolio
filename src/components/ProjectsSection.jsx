import { useState } from "react"; // 仅引入 useState
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    { id: 1, title: "作品一", description: "描述一" },
    { id: 2, title: "作品二", description: "描述二" },
    { id: 3, title: "作品三", description: "描述三" },
    { id: 4, title: "作品四", description: "描述四" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

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
              className={`carousel-item ${
                position === 0 ? "active" : position > 0 ? "right" : "left"
              }`}
              style={{
                transform: `translateX(${position * 30}%) scale(${
                  position === 0 ? 1 : 0.8
                })`,
                zIndex: position === 0 ? 2 : 1,
                opacity: position === 0 ? 1 : 0.5,
              }}
            >
              <div className="project-card">
                <h2>{project.title}</h2>
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
