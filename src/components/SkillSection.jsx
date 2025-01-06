import "./SkillSection.css";

const SkillSection = () => {
  const skills = [
    { name: "Figma", level: "Advanced" },
    { name: "Maze", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Illustrator", level: "Advanced" },
    { name: "Photoshop", level: "Intermediate" },
    { name: "3D Solidworks", level: "Advanced" },
    { name: "3D render Keyshot", level: "Advanced" },
    { name: "blender", level: "Beginner" },
    
  ];

  return (
    <section className="skill-section">
      <h2 className="section-title">技能</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
