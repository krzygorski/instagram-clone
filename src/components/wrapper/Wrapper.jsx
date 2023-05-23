import React from "react";
import { Post } from "../post/Post";
import { Sidebar } from "../sidebar/Sidebar";
import "./wrapper.css";
export const Wrapper = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};
