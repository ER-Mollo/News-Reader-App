import { useState, useEffect } from "react";

export default function SavedArticles() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(saved);
  }, []);

  return (
    <div>
      <h1>Saved Articles</h1>
      {savedArticles.length === 0 ? (
        <p>No saved articles.</p>
      ) : (
        savedArticles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
