import PropTypes from "prop-types";
import "./ProjectsSection.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const ProjectsSection = ({ currentSection, setCurrentSection }) => {
  const projects = [
    { title: "作品一", description: "作品一的描述", bgImage: project1 },
    { title: "作品二", description: "作品二的描述", bgImage: project2 },
    { title: "作品三", description: "作品三的描述", bgImage: project3 },
    { title: "作品四", description: "作品四的描述", bgImage: project4 },
  ];

  const handleWheel = (event) => {
    if (currentSection >= 1 && currentSection <= projects.length) {
      if (event.deltaY > 0 && currentSection < projects.length) {
        setCurrentSection((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 1) {
        setCurrentSection((prev) => prev - 1);
      }
    } else if (event.deltaY > 0 && currentSection === projects.length) {
      setCurrentSection((prev) => prev + 1); // 切换到下一部分
    } else if (event.deltaY < 0 && currentSection === 1) {
      setCurrentSection((prev) => prev - 1); // 返回上一部分
    }
  };

  const handleLeftClick = () => {
    if (currentSection > 1) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (currentSection < projects.length) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  return (
    <section className="projects" onWheel={handleWheel}>
      <div
        className="projects-container"
        style={{ transform: `translateX(-${(currentSection - 1) * 100}%)` }}
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
            width: `${((currentSection - 1 + 1) / projects.length) * 100}%`,
          }}
        ></div>
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  currentSection: PropTypes.number.isRequired,
  setCurrentSection: PropTypes.func.isRequired,
};

export default ProjectsSection;
