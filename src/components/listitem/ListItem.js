import React from "react";
import "./ListItem.css";

const ListItem = props => {
  const results = props.image;

  return (
    <div style={{ padding: "5px" }}>
      <a className="lightbox" href="#search">
        <img src={results.urls.regular} alt={results.alt_description} />
      </a>
      <div className="lightbox-target" id="search">
        <img
          src={results.urls.full}
          alt={results.alt_description}
          style={{ width: "500px", height: "500px" }}
        />
        <button>
          <span
            style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
          >
            Download
          </span>
        </button>
        <button>
          <span
            style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
          >
            Close
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
