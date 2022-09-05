import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      
        <div className="card mb-3">
          <img className="card-img-top" src={!imageUrl ? "https://www.outkick.com/wp-content/uploads/Joe-Theismann.jpg" : imageUrl} alt="" height="200px"/>
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div> 
        </div>
      
    );
  }
}

export default NewsItem;
