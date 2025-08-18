// Post.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [feedback, setFeedback] = useState("");

  // IntersectionObserver for scroll reveal (if not already added)
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Handle comment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
      setFeedback("Comment posted!");
      setTimeout(() => setFeedback(""), 2000);
    }
  };

  return (
    <div className="post-detail fade-in">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      
      {/* Content Wrapper to hold TOC and Post Content */}
      <div className="content-wrapper">
        {/* Table of Contents */}
        <aside className="table-of-contents reveal">
          <h4>Table of Contents</h4>
          <ol>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#main-content">Main Content</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ol>
        </aside>
        
        {/* Post Content */}
        <div className="post-content">
          {/* <h1 className="reveal">Blog Post {id}</h1> */}
          
          <section id="introduction" className="reveal">
            <h2>Introduction</h2>
            <p>
              This is the introduction for post {id}. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin ac urna nec mauris condimentum blandit.
            </p>
          </section>
          
          <section id="main-content" className="reveal">
            <h2>Main Content</h2>
            <p>
              Here is the main content of the blog post. It contains more detailed explanations,
              examples, and descriptions that captivate the reader’s attention.
            </p>
          </section>
          
          <section id="conclusion" className="reveal">
            <h2>Conclusion</h2>
            <p>
              This is the conclusion. Summarize the main points and leave a final thought to wrap up the post.
            </p>
          </section>
        </div>
      </div>
      
      {/* Comments Section */}
      <div className="comments-section reveal">
        <h3>Comments:</h3>
        {feedback && <div className="comment-feedback">{feedback}</div>}
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((comment, idx) => (
              <li key={idx}>{comment}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
