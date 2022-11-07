import React, { useState } from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "./config";

// Components
import HeroImage from "./components/HeroImage/HeroImage";
import Grid from "./components/Grid/Grid";
import Thumb from "./components/Thumb/Thumb";
import Spinner from "./components/Spinner/Spinner";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "./components/Button/Button";
import HomeMovieList from "./components/HomeMovieList";

// Hook
import { useHomeFetch } from "./hooks/useHomeFetch";

//Image
import NoImage from "./images/no_image.jpg";

const Home = () => {
  const {
    state,
    currentHero,
    setCurrentHero,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  if (error) return <div>Something went wrong</div>;
  console.log(state);

  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImage
          state={state}
          currentHero={currentHero}
          setCurrentHero={setCurrentHero}
          movieId={state.results[currentHero].id}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[currentHero].backdrop_path}`}
          title={state.results[currentHero].original_title}
          text={state.results[currentHero].overview}
        />
      )}

      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
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
        {state.results < 1 && <div>No results found</div>}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
