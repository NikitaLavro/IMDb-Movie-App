import React from "react";

//Componetns
import Thumb from "../Thumb/Thumb";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//Image
import NoImage from "../../images/no_image.jpg";

import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => {
  console.log(movie);
  return (
    <Wrapper backdrop={movie.backdrop_path} poster={movie.poster_path}>
      <Content>
        <Thumb
          className="notCLickable"
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        ></Thumb>
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT:</h3>
          <p>{movie.overview}</p>
          <h4>Genres:</h4>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          <h4>Production Companies:</h4>
          <p>
            {movie.production_companies.map((genre) => genre.name).join(", ")}
          </p>
          <div className="rating-directors">
            <div className="rating">
              <h3>RATING</h3>
              <div className="score">
                {Math.round(movie.vote_average * 100) / 100}
              </div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
