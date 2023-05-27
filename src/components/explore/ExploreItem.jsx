
import "./explore.css";
export const ExploreItem = ({ photo = true, img }) => {
  if (photo) {
    return <img className="explore_item" src={img.url} alt="random" />;
  }
  return <div className="explore-item"></div>;
};
