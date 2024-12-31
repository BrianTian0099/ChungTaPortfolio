const ArticlesSection = () => {
    const articles = [
      { title: '文章一', date: '2024-12-31', description: '描述內容一', link: '#' },
      { title: '文章二', date: '2024-12-30', description: '描述內容二', link: '#' },
      { title: '文章三', date: '2024-12-29', description: '描述內容三', link: '#' },
    ];
  
    return (
      <section className="articles">
        <h2 className="articles-title">我的文章</h2>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.title}</h3>
              <p className="date">{article.date}</p>
              <p>{article.description}</p>
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