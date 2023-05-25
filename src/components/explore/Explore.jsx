import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ExploreItem } from "./ExploreItem";
export const Explore = () => {
  return (
    <div style={{ width: "100%" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="5px"></Masonry>
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
        <ExploreItem />
      </ResponsiveMasonry>{" "}
    </div>
  );
};
