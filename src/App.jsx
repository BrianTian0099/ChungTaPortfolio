import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ArticlesSection from './components/ArticlesSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0); // 控制區域切換
  const totalSections = 5; // 總滑動次數（包括作品左右滑動）

  const handleWheel = (event) => {
    if (event.deltaY > 0 && currentSection < totalSections - 1) {
      // 向下滑動
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      // 向上滑動
      setCurrentSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const projectSectionIndex = 1;

    // 作品區域內的特定滑動邏輯
    if (currentSection >= projectSectionIndex && currentSection <= projectSectionIndex + 3) {
      const projectIndex = currentSection - projectSectionIndex;
      const projectContainer = document.querySelector('.projects-container');
      projectContainer.style.transform = `translateX(-${projectIndex * 100}vw)`;
    }

    sections[currentSection]?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <div onWheel={handleWheel}>
      <HeroSection />
      <ProjectsSection currentSection={currentSection} />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
}

export default App;
