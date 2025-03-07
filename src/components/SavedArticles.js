import { useState, useEffect } from "react";

export default function SavedArticles() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(saved);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Saved Articles</h1>
      {savedArticles.length === 0 ? (
        <p className="text-center text-gray-500">No saved articles.</p>
      ) : (
        <div className="space-y-6">
          {savedArticles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
