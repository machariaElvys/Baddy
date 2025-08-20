// Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample post data
const postsData = [
  { id: 1, title: "HOW'S THAT FACE?", content: "FIND OUT!.", image:"https://shorturl.at/E5BmS" },
  { id: 2, title: "ARE YOU SERVING?", content: "Serving looks with every step.", image:"https://shorturl.at/ZTQBd" },
  { id: 3, title: "CONFIDENCE ISN'T COCKY...", content: "Confidence is key, darling!", image:"https://shorturl.at/1aupN" },
  { id: 4, title: "WE OUTSIDE!", content: "Every outing is a chance to outshine yesterday" , image:"https://shorturl.at/5rmIZ" },
  { id: 5, title: "TECH VIBES", content: "Error 404: Limits not found." , image:"https://shorturl.at/J8p6C" },
  { id: 6, title: "WHAT I'M I GOOD AT?", content: "Gifted. Loaded. Ready to launch" , image:"https://rb.gy/5wxhvl" }

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

// function PostCard({ post }) {
//   const [likes, setLikes] = useState(0);
//   const [likeAnim, setLikeAnim] = useState(false);

//   // Handle like button click
//   const handleLike = () => {
//     setLikes(likes + 1);
//     setLikeAnim(true);
//     // Remove the animation class after 300ms so it can be re-triggered on subsequent clicks
//     setTimeout(() => {
//       setLikeAnim(false);
//     }, 300);
//   };

//   return (
//     <div className="post-card">
//          <img src={post.image} alt={post.title} className="post-image" />
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>

//       <Link to={`/post/${post.id}`} className="read-more">
//         Read More
//       </Link>

      

//       <div className="post-actions">
//         <button onClick={handleLike} className="like-btn">
//           ❤️
//         </button>
//         <span className={`like-count ${likeAnim ? "animate" : ""}`}>{likes}</span>
//       </div>

//     </div>
    
//   );

// }


// export default Home;

function PostCard({ post }) {
  const [likes, setLikes] = useState(0);
  const [likeAnim, setLikeAnim] = useState(false);

  const handleLike = (e) => {
    e.preventDefault(); // prevent navigating away when clicking the like button
    setLikes(likes + 1);
    setLikeAnim(true);
    setTimeout(() => {
      setLikeAnim(false);
    }, 300);
  };

  return (
    <Link to={`/post/${post.id}`} className="post-card-link">
      <div className="post-card">
        <img src={post.image} alt={post.title} className="post-image" />
        <h2>{post.title}</h2>
        <p>{post.content}</p>

        <div className="post-actions">
          <button onClick={handleLike} className="like-btn">
            ❤️
          </button>
          <span className={`like-count ${likeAnim ? "animate" : ""}`}>
            {likes}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Home;