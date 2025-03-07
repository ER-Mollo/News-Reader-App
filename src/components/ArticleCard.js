export default function ArticleCard({ article }) {
    if (!article) return null;
  
    return (
      <div>
        {/* Display Image if available */}
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} width="100%" />
        )}
  
        {/* Article Title */}
        <h2>{article.title}</h2>
  
        {/* Article Description */}
        {article.description && <p>{article.description}</p>}
  
        {/* Source Name & Published Date */}
        <p>
          <strong>{article.source.name}</strong> |{" "}
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
  
        {/* Read More Link */}
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    );
  }
  