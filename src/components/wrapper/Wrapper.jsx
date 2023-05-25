import React from "react";
import { Post } from "../post/Post";
import { Sidebar } from "../sidebar/Sidebar";
import "./wrapper.css";
import { Storybar } from "../storybar/Storybar";
import { Explore } from "../explore/Explore";
export const Wrapper = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Storybar />
        {/* <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div> */}
        <Explore />
      </div>
    </div>
  );
};
