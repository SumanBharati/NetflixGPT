import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { setGPTSearchView, hideGPTSearchView, removeGPTMovies } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { hideHomePageView, setHomePageView } from "../utils/homeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchView = () => {
    dispatch(setGPTSearchView());
    dispatch(hideHomePageView());
  };

  const handleHomePageView = () => {
    dispatch(hideGPTSearchView());
    dispatch(setHomePageView());
    dispatch(removeGPTMovies())
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48 cursor-pointer"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
        onClick={handleHomePageView}
      />

      {user && (
        <div className="flex p-2">
          {!gptSearchView ? (
            <button
              className="px-3 mx-2 bg-purple-600 text-white text-xl font-bold rounded-md"
              onClick={handleGPTSearchView}
            >
              GPT Search
            </button>
          ) : (
            <select className="p-2 mx-4 rounded-md text-lg bg-gray-800 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div className="w-16 h-16 cursor-pointer">
            <img
              src={user?.photoURL}
              alt="netflix-user-icon"
              onClick={handleSignOut}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
