import { useState, useEffect } from "react";

export default function ArticleCard({ article }) {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(saved);
  }, []);

  const saveArticle = () => {
    const updatedArticles = [...savedArticles, article];
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
    setSavedArticles(updatedArticles);
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <button onClick={saveArticle}>Save for Offline</button>
    </div>
  );
}
