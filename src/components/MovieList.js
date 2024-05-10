import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="ml-3 py-3">
      <h1 className="py-3 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {/* <button className=" text-8xl text-white mb-10 mr-2">&#8249;</button> */}
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} movieTitle={movie.title} />
          ))}
        </div>
        {/* <button className=" text-8xl text-white mb-10">&#8250;</button> */}
      </div>
    </div>
  );
};

export default MovieList;
