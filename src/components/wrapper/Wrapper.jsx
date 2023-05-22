import React from "react";
import { Post } from "../post/Post";
import { Sidebar } from "../sidebar/Sidebar";
import "./wrapper.css";
export const Wrapper = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="posts">
        <Post />
      </div>
    </div>
  );
};
