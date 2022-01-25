import React, { useState } from "react";
import "./Form.css";
import axios from "../axios";
import { Link, Redirect } from "react-router-dom";

function Form() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const postSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    axios
      .post("/posts", {
        title: title,
        excerpt: excerpt,
        content: content,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.assign("/allposts");
        }
      });

    setTitle("");
    setExcerpt("");
    setContent("");
  };
  return (
    <>
      <div className="form">
        <div className="heading">
          <h2> Post an Update</h2>
        </div>

        <div className="form-content">
          <form onSubmit={postSubmit}>
            <h3>Title</h3>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h3>Excerpt</h3>
            <input
              type="text"
              name="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
            <h3>Content</h3>
            <textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit"> Post </button>
          </form>
        </div>
      </div>

      <div className="new">
        <ul>
          <li>
            <Link to="/allposts"> all posts </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Form;
