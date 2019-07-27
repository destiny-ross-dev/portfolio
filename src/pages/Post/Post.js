import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { withRouter } from "react-router-dom";
import "./Post.css";

class BlogPost extends Component {
  state = { markdown: "" };
  componentDidMount() {
    const mdFile = require(`../../assets/${
      this.props.match.params.postName
    }.md`);
    fetch(mdFile)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    return (
      <div className="BlogPost">
        <ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}
export default withRouter(BlogPost);
