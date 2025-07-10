import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection /> 
      <SkillSection />
      <FeatureSection></FeatureSection>
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
}

export default App;
