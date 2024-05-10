import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { genAI } from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovie } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const prompt =
      "Act as a movie recommendation system and suggest all the movies for the query : " +
      searchText.current.value +
      ". Movies names should be comma seperated like the example result given ahead. Example:Gadar,Heeramandi,Shaitaan,Article 370,Kashmir Files.";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const geminiResult = response.text();

    if (!geminiResult) {
      // TODO: Write Error Handling
    }

    // Below commented lines of code are for openai API, which isn't working
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   // TODO: Write Error Handling
    // }

    // console.log(gptResults.choices?.[0]?.message?.content);

    const geminiMovies = geminiResult.split(",");
    const data = geminiMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbSuggestions = await Promise.all(data);
    const tmdbResults = tmdbSuggestions.map((data) =>
      data.filter((movie) => geminiMovies.includes(movie.title))
    );
    dispatch(
      addGPTMovie({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="pt-[9%] bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-10 p-4 ml-10 mb-8 bg-gray-800 text-xl text-white text-center rounded-lg"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTSearchClick}
          className="col-span-2 mb-8 mr-10 ml-2 bg-red-800 text-white text-xl rounded-lg"
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
