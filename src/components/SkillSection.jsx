import "./SkillSection.css";

const SkillSection = () => {
  const skills = [
    "Figma", "Maze", "HTML", "CSS", "JavaScript",
    "Git", "Illustrator", "Photoshop",
    "3D Solidworks", "Keyshot", "Blender",
  ];

  // 重複一組，讓輪播平滑不會斷
  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="skill-section marquee-wrapper">
      <h2 className="section-title">技能</h2>
      <div className="marquee">
        <div className="marquee-content">
          {repeatedSkills.map((skill, index) => (
            <div key={index} className="skill-pill">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
