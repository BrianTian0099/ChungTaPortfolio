import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import ContactSection from "./components/ContactSection";
import FeatureSection from "./components/FeatureSection";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Accomplishment from "./components/Accomplishment";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <MainPage />
      <HeroSection />
      {/* <AboutSection />  */}
      <SkillSection />
      <Accomplishment/>
      <FeatureSection></FeatureSection>
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
}

export default App;
