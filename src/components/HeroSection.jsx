import "./HeroSection.css";

const HeroSection = () => {
  const profileImage = "https://raw.githubusercontent.com/BrianTian0099/ChungTaPortfolio/refs/heads/main/src/assets/head.png?token=GHSAT0AAAAAAC4TSNYUJQ5D3DRPA6R2CCFKZ3Y7TSQ";

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
