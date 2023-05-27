// instagram post component

import "./post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Post = () => {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_header_panel">
          <img
            src="https://images.theconversation.com/files/500899/original/file-20221214-461-22jr1l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt=""
            className="post_header_img"
          />
          <div className="post_header_content">
            <div>
              <span className="post_header_content_name">functionaltennis</span>{" "}
              &middot; <span className="post_header_content_time">2 min</span>
            </div>

            <span className="post_header_content_location">Kraków</span>
          </div>
        </div>
        <div className="post_header_panel">
          <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
        </div>
      </div>
      <div
        className="post_img_container"
        style={{
          // backgroundImage: `url(${post.image})`
          backgroundImage:
            "url('https://www.zooplus.pl/magazyn/wp-content/uploads/2021/04/dog-niemiecki-768x512.jpg')",
        }}
      ></div>
      <div className="post_panel">
        <div className="post_panel_action">
          <div>
            <FontAwesomeIcon
              icon="fa-regular fa-heart"
              className="post_panel_icon"
            />
            <FontAwesomeIcon
              icon="fa-regular fa-comment"
              className="post_panel_icon"
            />
            <FontAwesomeIcon
              icon="fa-regular fa-paper-plane"
              className="post_panel_icon"
            />
          </div>
          <div>
            {" "}
            <FontAwesomeIcon
              icon="fa-regular fa-bookmark"
              className="post_panel_icon post_panel_icon_last"
            />
          </div>
        </div>

        <span className="post_panel_likes_number">Liczba polubień: 1429</span>
        <div className="post_panel_description">
          <span className="post_panel_description_name">functionaltennis</span>{" "}
          <span className="post_panel_description_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </span>
        </div>

        <div className="post_panel_comments">
          <div className="post_panel_comment"></div>
        </div>
        <div className="post_panel_more_comments">
          {" "}
          <span>Zobacz wszystkie komentarze: 7</span>
        </div>

        <div className="post_new_comment">
          <input type="text" name="" id="" placeholder="Dodaj komentarz..." />
        </div>
      </div>
    </div>
  );
};
