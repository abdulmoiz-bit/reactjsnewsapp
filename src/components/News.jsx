import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75f18e9edec467ba8e495e3518e4323&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData); 
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      laoding: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

 
  render() {
    return (
      <div className="container my-4">
        <div className="container my-4">
          <div className="row justify-content-center">
            <h1>Top {this.capitalizeFirstLetter(this.props.category)} News </h1>
          </div>
        </div>

        <div className="row">
          {this.state.articles?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        
        
      </div>
    );
  }
}

export default News;
