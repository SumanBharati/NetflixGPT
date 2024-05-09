import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <form className="pt-[9%] bg-black grid grid-cols-12">
        <input
          type="text"
          className="col-span-10 p-4 ml-10 mb-8 bg-gray-800 text-xl text-center rounded-lg"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button className="col-span-2 mb-8 mr-10 ml-2 bg-red-800 text-white text-xl rounded-lg">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
