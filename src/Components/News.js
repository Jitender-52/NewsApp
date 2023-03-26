import React, { Component } from "react";
import NewItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewItem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewItem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
