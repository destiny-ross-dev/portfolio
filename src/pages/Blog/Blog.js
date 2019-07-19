import React, { Component } from "react";
import ContentCards from "../../components/ContentCards/ContentCards";
import "./Blog.css";
import BlogPost from "../../components/BlogPost/BlogPost";

function Blog() {
  return (
    <div className="Page BlogPage">
      <div className="CardsContainer">
        <BlogPost
          backgroundThumbnail="https://www.bacancytechnology.com/blog/wp-content/uploads/2018/07/Structure-Your-React-Redux-banner.png"
          title="React-Redux Hooks Update"
          category="Frontend"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas."
        />
        <BlogPost
          backgroundThumbnail="https://i.imgur.com/xO8k5BK.png"
          small
          title="React, GraphQL, Apollo"
          category="Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam ex. Vestibulum ante ipsum primis in faucibus orci."
        />
        <BlogPost
          backgroundThumbnail="https://i.imgur.com/xO8k5BK.png"
          small
          title="React, GraphQL, Apollo"
          category="Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam ex. Vestibulum ante ipsum primis in faucibus orci."
        />
        <BlogPost
          backgroundThumbnail="https://i.imgur.com/xO8k5BK.png"
          small
          title="React, GraphQL, Apollo"
          category="Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam ex. Vestibulum ante ipsum primis in faucibus orci."
        />
      </div>
    </div>
  );
}

export default Blog;
