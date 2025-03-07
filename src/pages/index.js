import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import DarkmodeToggle from "@/components/DarkModeToggle";
import SavedArticles from "@/components/SavedArticles";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch news articles
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
        if (!apiKey) {
          throw new Error("Missing API Key. Check your .env.local file.");
        }

        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`
        );

        if (!response.data || !response.data.articles) {
          throw new Error("Invalid API response.");
        }

        setArticles(response.data.articles);
      } catch (err) {
        setError(err.message || "Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <header>
        <h1>📰 News Reader App</h1>
        <DarkmodeToggle />
      </header>

      <CategoryFilter category={category} setCategory={setCategory} />

      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading news...</p>}

      <div>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>

      {/* Saved Articles Section */}
      <button onClick={() => window.location.href = "/saved-articles"}>
        View Saved Articles
      </button>
      <SavedArticles />
    </div>
  );
}
