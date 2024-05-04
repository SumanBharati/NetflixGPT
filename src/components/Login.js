import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkDataValidations } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormValidation = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkDataValidations(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/5030300f-ed0c-473a-9795-a5123d1dd81d/US-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0941c399-f3c4-4352-8c6d-0a3281e37aa0_medium.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="py-4 font-bold text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            // ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-md bg-black bg-opacity-65 w-full border border-gray-400"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address or phone number"
          className="p-4 my-4 rounded-md bg-black bg-opacity-65 w-full border border-gray-400"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-md bg-black bg-opacity-65 w-full border border-gray-400"
        />
        {errorMessage && <p className="mt-4 text-lg text-red-700 font-semibold">{errorMessage}</p>}
        <button
          className="p-2.5 my-4 rounded-md bg-red-700 w-full"
          onClick={handleFormValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-500">
          {isSignInForm ? "New to Netflix? " : "Already a member? "}
          <span
            className="hover:underline underline-offset-2 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
