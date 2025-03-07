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
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <header className="bg-blue-600 text-white py-4 px-6 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">📰 News Reader App</h1>
        <DarkmodeToggle />
      </header>

      <main className="container mx-auto py-6 px-4">
        <CategoryFilter className="mb-4" category={category} setCategory={setCategory} />

        {error && <p className="text-red-500">{error}</p>}
        {loading && <p className="text-blue-500">Loading news...</p>}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))
          ) : (
            <p className="col-span-full text-center">No articles found.</p>
          )}
        </div>

        {/* Saved Articles Section */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.location.href = "/saved-articles"}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            View Saved Articles
          </button>
        </div>
      </main>
    </div>
  );
}

