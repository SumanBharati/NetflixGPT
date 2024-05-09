import React, { useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.gpt.showGPTSearch);
  const showHomePage = useSelector((store) => store.home.showHomePage);

  useNowPlayingMovies();

  usePopularMovies();

  useTopRatedMovies();

  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showHomePage && !gptSearchView ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GPTSearch />
      )}
      {/* {gptSearchView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )} */}
    </div>
  );
};

export default Browse;
