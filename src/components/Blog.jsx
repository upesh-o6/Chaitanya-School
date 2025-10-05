
import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fakePosts = [
      { id: 1, title: 'Annual Sports Day Highlights', excerpt: 'Our students shone bright at the sports day event with exciting races and team wins. Check out the fun moments captured.' },
      { id: 2, title: 'New Academic Session Begins', excerpt: 'Welcome back! Exciting plans for the new year include new labs and guest lectures from industry experts.' },
      { id: 3, title: 'Science Workshop Success', excerpt: 'Students explored robotics and coding in our latest workshop, building their first AI models.' }
    ];
    setPosts(fakePosts);
  }, []);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2>Latest Blog Posts</h2>
        <div className="grid">
          {posts.map(post => (
            <div key={post.id} className="card">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;