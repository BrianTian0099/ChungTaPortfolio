import "./FeatureSection.css";

const FeatureSection = () => {
  const features = [
    "提供用戶友好的界面設計",
    "專注於工業設計與UI/UX結合",
    "響應式設計，適應多種設備",
    "基於最佳實踐的互動流程設計",
  ];

  return (
    <section className="feature-section">
      <h2 className="feature-title">設計探索</h2>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureSection;
