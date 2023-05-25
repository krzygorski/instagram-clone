import React from "react";
import "./explore.css";
export const ExploreItem = ({ photo = true }) => {
  if (photo) {
    return (
      <div className="explore_item">
        <img src="https://picsum.photos/200/300" alt="random" />
      </div>
    );
  }
  return <div className="explore-item"></div>;
};
