import { useEffect, useState } from "react";

import { ExploreItem } from "./ExploreItem";



import axios from "axios";
import { Masonry } from "@mui/lab";

export const Explore = () => {
  const [images, setImages] = useState([]);
  let columns;
  if (window.innerWidth <= 900) {
    columns = 3;
  }
  if (window.innerWidth <= 450) {
    columns = 3;
  }
  if (window.innerWidth > 900 && window.innerWidth < 1200) {
    columns = 4;
  }
  if (window.innerWidth >= 1200) {
    columns = 5;
  }

  useEffect(() => {

    const promise = Promise.all(
      new Array(50).fill(0).map((e, index) => {
        return axios.get(
          `https://jsonplaceholder.typicode.com/photos/${index + 1}`
        );
      })
    );
    promise.then((res) => {
      setImages(res.map((e) => e.data));
    });
  }, []);

  return (
    <div className="explore">
      <Masonry
        columns={columns}
        spacing={0.5}
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {images.map((img, index) => (
          <ExploreItem key={index + "imgasdas"} img={img} />
        ))}
      </Masonry>
    </div>

    // <span>{images.length}</span>
  );
};
