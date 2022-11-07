import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image clickable={clickable} src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image clickable={clickable} src={image} alt="movie-thumb" />
      )}
    </div>
  );
};

export default Thumb;
