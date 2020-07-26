import React from "react";
import "./footer.css";

const Footer = props => {
  return (
    <div className="bottom_box">
      <h2 style={{ display: "box", marginLeft: "180px", padding: "10px" }}>
        Search<span style={{ color: "skyblue" }}>it</span>
      </h2>
      <div>
        <h6
          style={{
            color: "white",
            paddingLeft: "100px",
            marginTop: "2px",
            marginBottom: "10px"
          }}
        >
          Popular searches
        </h6>
        <ul>
          <li>Dog</li>
          <li>Cat</li>
          <li>Space</li>
          <li>Nature</li>
          <li>Bussiness</li>
        </ul>
        <ul>
          <li>Office</li>
          <li>Coffee</li>
          <li>World</li>
          <li>WildLife</li>
          <li>Beachtrip</li>
        </ul>
        <ul>
          <li>Digital</li>
          <li>Meeting</li>
          <li>Coins</li>
          <li>Games</li>
          <li>Holiday</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
