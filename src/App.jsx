import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import FeatureSection from "./components/FeatureSection";
import "./App.css";

function App() {
  return (
    <div>
      <HeroSection />
      <SkillSection />
      <FeatureSection></FeatureSection>
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
}

export default App;
