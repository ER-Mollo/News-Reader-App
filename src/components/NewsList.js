import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "@/components/ArticleCard";

export default function NewsList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setError(null);
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError("Failed to fetch news. Please try again.");
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error && (
        <p className="text-red-500 text-center font-semibold mb-4">{error}</p>
      )}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading news...</p>
      )}
    </div>
  );
}
