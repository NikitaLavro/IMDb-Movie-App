import React from "react";

import Thumb from "./Thumb/Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import NoImage from "../images/no_image.jpg";

const HomeMovieList = ({ state }) => {
  return (
    <>
      {state.results.map((movie) => (
        <Thumb
          key={movie.id}
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : { NoImage }
          }
          movieId={movie.id}
          clickable={true}
        />
      ))}
    </>
  );
};

export default HomeMovieList;
