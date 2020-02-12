import React, { useState } from 'react';
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "../pages/NotFoundPage";
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: []
  });

  if (!article) return <NotFoundPage />

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
}
 
export default ArticlePage;