import React, { useEffect, useState } from "react";
import "./AllPosts.css";
import axios from "../axios";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/posts/all").then((response) => {
      setPosts(
        response.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    });
  }, []);

  return (
    <>
      <div className="allposts">
        <div className="post-content">
          {posts.map((post) => {
            return (
              <>
                <div className="post-title">
                  <h3> {post.title} </h3>
                </div>
                <div className="post-excerpt">
                  <p>{post.excerpt}</p>
                </div>
                <div className="post-content">{post.content}</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllPosts;
