import { useState } from 'react';
import PropTypes from 'prop-types';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    { title: '作品一', description: '作品一的描述', bgImage: project1 },
    { title: '作品二', description: '作品二的描述', bgImage: project2 },
    { title: '作品三', description: '作品三的描述', bgImage: project3 },
    { title: '作品四', description: '作品四的描述', bgImage: project4 },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleWheel = (event) => {
    if (event.deltaY > 0 && currentProject < projects.length - 1) {
      setCurrentProject((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentProject > 0) {
      setCurrentProject((prev) => prev - 1);
    }
  };

  return (
    <section
      className="projects"
      style={{
        backgroundImage: `url(${projects[currentProject].bgImage})`,
      }}
      onWheel={handleWheel}
    >
      <div className="projects-content">
        <h2>{projects[currentProject].title}</h2>
        <p>{projects[currentProject].description}</p>
        <button>點擊了解</button>
      </div>
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

ProjectsSection.propTypes = {
  onNextSection: PropTypes.func,
};

export default ProjectsSection;
