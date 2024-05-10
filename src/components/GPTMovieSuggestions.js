import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const GPTMovieSuggestions = () => {
  const { movieResults } = useSelector((store) => store.gpt);
  const arr = [];
  movieResults?.map(data => data?.map(movie => arr.push(movie)));

  return (
    <div>
      <img
        className=" absolute w-screen aspect-video"
        src={BACKGROUND_IMAGE}
        alt="background"
      />
      {arr.length !== 0 && (
        <div className="w-10/12 absolute p-4 bg-black bg-opacity-90 my-20 mx-auto right-0 left-0 text-white">
          <MovieList title="Search Results" movies={arr} /> 
        </div>
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
