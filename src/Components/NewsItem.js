import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="https://www.gannett-cdn.com/presto/2023/03/23/USAT/0a21a572-72ae-49b8-a759-0078b5cb0dba-USP_NCAA_Basketball__NCAA_Tournament_Second_Round-_7.jpg?crop=3929,2210,x1183,y173&width=3200&height=1800&format=pjpg&auto=webp" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItem