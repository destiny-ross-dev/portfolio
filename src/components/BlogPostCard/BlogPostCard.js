import React from "react";
import "./BlogPostCard.css";

const BlogPostCard = ({
  backgroundThumbnail,
  category,
  title,
  small,
  description
}) => {
  return (
    <div className={`BlogPost ${small && "small"}`}>
      <div
        className="BlogPost__Thumbnail"
        style={{
          backgroundImage: `url(
            "https://www.bacancytechnology.com/blog/wp-content/uploads/2018/07/Structure-Your-React-Redux-banner.png"
          )`
        }}
      >
        <div className="BlogPost__Thumbnail--opacity" />
      </div>
      <div className="BlogPost__Description dark-text">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="BlogPost__Meta">
          <h3>5 minute read</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
