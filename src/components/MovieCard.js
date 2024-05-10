import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieTitle }) => {
  return (
    <>
      {posterPath && (
        <div>
          <div className=" w-64 pr-4">
          {/* <div className=" w-96 pr-4"> */}
            <img
              className=" rounded-md"
              src={IMG_CDN_URL + posterPath}
              alt="Movie_Card"
            />
          </div>

          {/* <h1 className="-mt-[28px] relative z-10 text-white text-xl text-center bg-gradient-to-t from-black">
            {movieTitle}
          </h1> */}
        </div>
      )}
    </>
  );
};

export default MovieCard;
