import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 4;
  const [startY, setStartY] = useState(0); // 用於觸摸滑動

  // 滾輪事件（電腦版）
  const handleWheel = (event) => {
    if (event.deltaY > 0 && currentSection < totalSections - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  // 觸摸滑動（手機版）
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const endY = e.touches[0].clientY;
    const deltaY = startY - endY;

    if (deltaY > 50 && currentSection < totalSections - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (deltaY < -50 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  // 滾動到當前區塊
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections[currentSection]?.scrollIntoView({ behavior: "smooth" });
  }, [currentSection]);

  return (
    <div
      onWheel={handleWheel} // 電腦版滾輪事件
      onTouchStart={handleTouchStart} // 手機觸摸開始
      onTouchMove={handleTouchMove} // 手機觸摸移動
    >
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
}

export default App;
