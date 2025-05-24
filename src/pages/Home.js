// Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample post data
const postsData = [
  { id: 1, title: "Glow Up Tips", content: "Drink water, wear SPF, and slay every day.", image:"https://shorturl.at/E5BmS" },
  { id: 2, title: "OOTD Inspo", content: "Serving looks with every step.", image:"https://shorturl.at/ZTQBd" },
  { id: 3, title: "Confidence 101", content: "Head high, crown on. You're the main character.", image:"https://shorturl.at/sfUcR" },
  { id: 3, title: "Gurlz Out", content: "Head high, crown on. You're the main character." , image:"https://shorturl.at/WDpe2" }


];

function Home() {
  const [search, setSearch] = useState("");

  const filteredPosts = postsData.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>A Baddie's Blog</h1>

      <input
        type="text"
        placeholder="Search for a post..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="post-list">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }) {
  const [likes, setLikes] = useState(0);
  const [likeAnim, setLikeAnim] = useState(false);

  // Handle like button click
  const handleLike = () => {
    setLikes(likes + 1);
    setLikeAnim(true);
    // Remove the animation class after 300ms so it can be re-triggered on subsequent clicks
    setTimeout(() => {
      setLikeAnim(false);
    }, 300);
  };

  return (
    <div className="post-card">
         <img src={post.image} alt={post.title} className="post-image" />
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div className="post-actions">
        <button onClick={handleLike} className="like-btn">
          ❤️
        </button>
        <span className={`like-count ${likeAnim ? "animate" : ""}`}>{likes}</span>
      </div>

      <Link to={`/post/${post.id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
}

export default Home;
