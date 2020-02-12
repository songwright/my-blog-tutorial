import React from 'react';

const UpvotesSection = () => {
  const upvoteArticle = async ({ articleName, upvotes, setArticleInfo}) => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post'
    });
    const body = await result.json();
    setArticleInfo(body);
  }
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>This post has been upvoted {upvotes} times.</p>
    </div>
  );
}
 
export default UpvotesSection;