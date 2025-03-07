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
    <div>
      {error && <p>{error}</p>}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}
