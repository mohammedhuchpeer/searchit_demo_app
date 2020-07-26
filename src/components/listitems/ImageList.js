import React from "react";
import ListItem from "../listitem/ListItem";
import "./ImageList.css";

const ImageList = props => {
  const onClick = () => {
    console.log("clicked");
  };

  const imgs = props.images.map(image => {
    return <ListItem key={image.id} image={image} onClick={onClick} />;
  });
  return (
    <div className="pages">
      {imgs}
    </div>
  );
};

export default ImageList;
