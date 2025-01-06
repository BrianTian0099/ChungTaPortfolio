import { useState } from "react";
import "./ProjectsSection.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import pdfIcon from "../assets/ICON/pdficon.svg"; // 引入 SVG 圖標

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "穿戴式智慧手錶介面設計",
      technologies: "FIGMA, Wireframe, 3D Solidworks , 3D render Keyshot",
      description: "本項目旨在了解用戶對穿戴裝置的需求，涵蓋功能、界面、通知及外觀設計，通過調查優化設計，提升用戶體驗。",
      bgImage: project1,
      link: "https://drive.google.com/file/d/1J8C99hBFbrhMOkqv9ARYlPz27mY6M1qt/view?usp=sharing",
    },
    {
      id: 2,
      title: "AI助手智慧剪輯平台",
      technologies: "FIGMA, Wireframe , Maze , 問卷設計 ",
      description: "JUSTCLIP 利用生成式 AI 技術，簡化剪輯流程，降低入門門檻。用戶僅需上傳素材至雲端，AI 即可智能優化內容，打造高效且創新的剪輯體驗。",
      bgImage: project2,
      link: "https://drive.google.com/file/d/1pc2cFW9oXVTGw2MvBezGo3PcqOxGxtA8/view?usp=sharing",
    },
    {
      id: 3,
      title: "HMI中控介面設計",
      technologies: "FIGMA, Wireframe , Maze , 問卷設計",
      description: "此作品專注於 HMI 介面設計，結合用戶需求與交互體驗，透過直觀的界面布局與智能化功能，提升駕駛安全性與便利性，提供更流暢的使用體驗。",
      bgImage: project3,
      link: "https://drive.google.com/file/d/1xz_r2CrTmb9e5rsq0ARHxsBuolHkYqZi/view?usp=sharing",
    },
    {
      id: 4,
      title: "作品四",
      technologies: "Node.js, Express, MongoDB",
      description: "此作品聚焦進程管理服務介面設計，提供清晰的數據可視化與高效的操作流程。界面簡潔直觀，支持多任務切換與實時進度跟蹤，助力用戶提升管理效率與決策能力。",
      bgImage: project4,
      link: "https://drive.google.com/file/d/1SDX3x053UTp1vbVHE8gthGG03rdjnq8p/view?usp=sharing",
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
                  <img src={pdfIcon} alt="PDF Icon" className="icon" />
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
