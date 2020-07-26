import React, { Component } from "react";
import ImageList from "../listitems/ImageList";
import "./Pagination.css";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <div className="pages">
        <ImageList />
      </div>
    );
  }
}

export default Pagination;
