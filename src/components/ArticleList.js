import React from 'react';
import Article from './Article'; // Import the Article component if it's used in the ArticleList component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} /> // Assuming the Article component is used and props are spread
      ))}
    </main>
  );
}

export default ArticleList;