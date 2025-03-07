import { useState, useEffect } from "react";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch news articles from NewsAPI
    const fetchNews = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>

      {/* Display list of articles */}
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
