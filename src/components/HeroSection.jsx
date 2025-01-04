import "./HeroSection.css";

const HeroSection = () => {
  const profileImage = "https://raw.githubusercontent.com/BrianTian0099/ChungTaPortfolio/refs/heads/main/src/assets/head2.png?token=GHSAT0AAAAAAC4TSNYUDVALXRO2M33TJ2IKZ3ZAYEA";

  return (
    <section className="hero">
      <div className="image-container">
        <img src={profileImage} alt="Profile" style={{ borderRadius: "50%", width: "200px", height: "200px" }} />
      </div>
      <div className="text-content">
        <h1>Brian Tian</h1>
        <p>Bridging industrial design and UI/UX to craft exceptional interactive experiences.</p>
      </div>
    </section>
  );
};

export default HeroSection;
