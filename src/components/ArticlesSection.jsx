import "./ArticlesSection.css";

const ArticlesSection = () => {
  const articles = [
    {
      title: " A simple interactive structure",
      date: "2024.10.30",
      description: "Draft video for switching between video and web on a small component with a simple interactive structure. Once confirmed, proceed to implement in React.",
      link: "https://www.linkedin.com/posts/brian-tian-232945189_css-html-activity-7230122440176099329-AwLC?utm_source=share&utm_medium=member_desktop",
    },
    // 更多文章可以繼續添加
  ];

  return (
    <section className="articles-section">
      <h2 className="articles-title">我的文章</h2>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-image"></div>
            <div className="article-info">
              <div className="article-header">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-date">{article.date}</p>
              </div>
              <p className="article-description">{article.description}</p>
            </div>
            <a href={article.link} className="read-button">
              閱讀
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
