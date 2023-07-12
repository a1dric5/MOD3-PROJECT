import React from 'react';
import './blogarticle.css';

const articles = [
  {
    title: 'Article 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum dolor ut ligula condimentum efficitur.',
    author: 'Author 1',
    date: 'June 1, 2023',
  },
  {
    title: 'Article 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum dolor ut ligula condimentum efficitur.',
    author: 'Author 2',
    date: 'June 5, 2023',
  },
  {
    title: 'Article 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum dolor ut ligula condimentum efficitur.',
    author: 'Autor 3',
    date: 'June 10, 2023',
  },
];

const BlogArticles = () => {
  return (
    <div className="blog-articles">
      {articles.map((article, index) => (
        <div className="article-card" key={index}>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-description">{article.description}</p>
          <div className="article-info">
            <p className="article-author">By {article.author}</p>
            <p className="article-date">{article.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogArticles;
