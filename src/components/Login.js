import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  //   const toggleSignInForm = () => {
  //     setIsSignInForm(!isSignInForm);
  //   };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/5030300f-ed0c-473a-9795-a5123d1dd81d/US-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0941c399-f3c4-4352-8c6d-0a3281e37aa0_medium.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-[22.5%] absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="py-4 font-bold text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
            className="p-4 my-4 rounded-md bg-black bg-opacity-65 w-full border border-gray-400"
          />
        )}
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="on"
          placeholder="Email address or phone number"
          className="p-4 my-4 rounded-md bg-black bg-opacity-65 w-full border border-gray-400"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="p-4 my-4 rounded-md bg-black bg-opacity-65 w-full border border-gray-400"
        />
        <button className="p-2.5 my-4 rounded-md bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already a member?"}
          {isSignInForm ? (
            <button
              className="hover:underline underline-offset-2 text-white"
              onClick={() => {
                setIsSignInForm(false);
              }}
            >
              Sign Up now.
            </button>
          ) : (
            <button
              className="hover:underline underline-offset-2 text-white"
              onClick={() => {
                setIsSignInForm(true);
              }}
            >
              Sign In now.
            </button>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
