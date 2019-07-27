import React, { Component } from "react";
import "./Blog.css";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="Page BlogPage">
      <div className="CardsContainer">
        <Link to={`/blog/post/react-redux-hooks`}>
          <BlogPostCard
            backgroundThumbnail="https://www.bacancytechnology.com/blog/wp-content/uploads/2018/07/Structure-Your-React-Redux-banner.png"
            title="React-Redux Hooks Update"
            category="Frontend"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas."
          />
        </Link>
        <Link to="/blog/post/react-graphql-apollo">
          <BlogPostCard
            backgroundThumbnail="https://i.imgur.com/xO8k5BK.png"
            small
            title="React, GraphQL, Apollo"
            category="Frontend"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam ex. Vestibulum ante ipsum primis in faucibus orci."
          />
        </Link>
        <BlogPostCard
          backgroundThumbnail="https://i.imgur.com/xO8k5BK.png"
          small
          title="React, GraphQL, Apollo"
          category="Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec diam ex. Vestibulum ante ipsum primis in faucibus orci."
        />
        <BlogPostCard
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
