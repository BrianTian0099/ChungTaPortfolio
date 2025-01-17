import "./HeroSection.css";
import profileImage from "../assets/head3.png"; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="image-container">
        {/* 重叠的圆形 */}
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <img 
          src={profileImage} 
          alt="Profile" 
          className="profile-image"
        />
      </div>
      <div className="text-content">
        <h1>Brian Tian</h1>
        <p>Bridging industrial design and UI/UX to craft exceptional interactive experiences.</p>
      </div>
    </section>
  );
};

export default HeroSection;
