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
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden p-4 mb-4 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <button
        onClick={saveArticle}
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Save for Offline
      </button>
    </div>
  );
}
