import React, { Component } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ImageList from "./components/listitems/ImageList";
import axios from "axios";

const LOAD_STATE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING"
};

class App extends Component {
  state = {
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1,
    loadState: LOAD_STATE.LOADING
  };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID 2nyg57FS_6kuE6vNZeiA_gNCUDjg1HcFzbEpe0s6iSQ`
      }
    });
    console.log(response.data.results);
    this.setState({ photos: response.data.results });
  };

  render() {
    return (
      <React.Fragment>
        <Header userSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.photos} />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
