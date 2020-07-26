import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    val: ""
  };

  onInputChange = event => {
    this.setState({ val: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
  };

  render() {
    const TAGS = [
      "Dog",
      "Cat",
      "Space",
      "Nature",
      "Bussiness",
      "Office",
      "Coffe",
      "World"
    ];
    const tags = TAGS.map(tag =>
      <p className="p1" key={tag}>
        {tag}
      </p>
    );
    return (
      <div className="Box">
        <div className="container">
          <h2>
            Search<span style={{ color: "skyblue" }}>it</span>
          </h2>
          <p>Free stock photos for everything</p>
          <p className="p">
            We offer the best free stock photo's all in one place
          </p>
          <div className="box">
            <p className="h4"> Search by tags:</p>
            {tags}
          </div>
          <form className="search-container" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="search-bar"
              placeholder="Search for images here....."
              value={this.state.value}
              onChange={this.onInputChange}
            />
            <a href="\" onClick={this.handleSubmit}>
              <img
                className="search-icon"
                src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                alt="new"
              />
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
