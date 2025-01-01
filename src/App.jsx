import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState(0); // 控制区域切换
  const totalSections = 3; // 总滚动区间数

  const handleWheel = (event) => {
    if (event.deltaY > 0 && currentSection < totalSections - 1) {
      // 向下滚动
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      // 向上滚动
      setCurrentSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections[currentSection]?.scrollIntoView({ behavior: "smooth" });
  }, [currentSection]);

  return (
    <div onWheel={handleWheel}>
      <HeroSection />
      <ProjectsSection
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
}

export default App;
