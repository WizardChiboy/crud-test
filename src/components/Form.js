import React from "react";
import "./Form.css";
import axios from "../axios";

function Form() {
  return (
    <>
      <div className="form">
        <div className="heading">
          <h2> Post an Update</h2>
        </div>

        <div className="form-content">
          <form action="/posts" method="post">
            <h3>Title</h3>
            <input type="text" name="title" id="" />
            <h3>Excerpt</h3> <input type="text" name="excerpt" id="" />
            <h3>Content</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit"> Post </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
