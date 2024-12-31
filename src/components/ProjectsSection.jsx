import { useState } from 'react';

const ProjectsSection = () => {
  const projects = [
    { title: '作品一', description: '作品一的描述', bgImage: 'project1.jpg' },
    { title: '作品二', description: '作品二的描述', bgImage: 'project2.jpg' },
    { title: '作品三', description: '作品三的描述', bgImage: 'project3.jpg' },
    { title: '作品四', description: '作品四的描述', bgImage: 'project4.jpg' },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleScroll = (event) => {
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
      onWheel={handleScroll}
    >
      <div className="projects-content">
        <h2>{projects[currentProject].title}</h2>
        <p>{projects[currentProject].description}</p>
        <button>點擊了解</button>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default ProjectsSection;