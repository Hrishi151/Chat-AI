import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SmileyIcon from "../images/smiley.png";
import PhotoIcon from "../images/photo.png";

const Signup = () => {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Panel */}
      <div className="w-1/2 relative bg-gradient-to-br from-[#5B61F5] via-[#AE6BE9] to-[#F7A6A6] text-white p-16 flex flex-col justify-between overflow-hidden">
        {/* Top Left - CHAT A.I+ Label */}
        <div className="absolute top-6 left-6 z-10">
          <div className="iabsolute top-6 left-6 z-10 text-2xl font-bold tracking-wide">
            CHAT A.I+
          </div>
        </div>

        <div>
          {/* Hero Heading */}
          <h1 className="text-5xl font-bold leading-tight text-left">
            Learn, Discover &
          </h1>
          <h1 className="text-5xl font-bold leading-tight pl-20 mt-1">
            Automate in One Place.
          </h1>

          {/* Simulated user message */}
          <p className="mt-10 mb-4 text-white text-sm">
            Create a chatbot gpt using python language what will be step for
            that
          </p>

          {/* Chat A.I+ badge below question (you can remove if it's now shown top-left only) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/10 border border-white/20 text-xs font-semibold">
            CHAT A.I +
          </div>

          {/* Bot response */}
          <div className="space-y-4 text-sm">
            <p>
              <strong>
                Sure, I can help you get started with creating a chatbot using
                GPT in Python.
              </strong>{" "}
              Here are the basic steps you'll need to follow:
            </p>
            <ol className="space-y-3 list-decimal list-inside">
              <li>
                <strong>Install the required libraries:</strong> You'll need to
                install the transformers library from Hugging Face to use GPT.
                <div className="ml-4">You can install it using pip.</div>
              </li>
              <li>
                <strong>Load the pre-trained model:</strong> GPT comes in
                several sizes and versions, so you'll need to choose the one
                that fits your needs.
                <div className="ml-4">
                  You can load a pre-trained GPT model.
                </div>
              </li>
            </ol>
            <p>
              <strong>These are just the basic steps</strong> to get started
              with a GPT chatbot in Python.
            </p>
            <p>
              Depending on your requirements, you may need to add more features
              or complexity to the chatbot. Good luck!
            </p>
          </div>
        </div>

        {/* Input bar */}
        <div className="mt-10">
          <div className="flex items-center px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-md">
            <img src={SmileyIcon} alt="Smiley" className="w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="Reply ..."
              className="flex-grow bg-transparent text-white placeholder-white focus:outline-none text-sm"
            />
            <img src={PhotoIcon} alt="Upload" className="w-5 h-5 mx-3" />
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5B61F5] to-[#AE6BE9] flex items-center justify-center">
              <span className="text-white text-lg">➤</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex justify-center items-center p-16 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Sign up with free trial</h2>
            <p className="text-sm text-gray-500 font-medium">
              Empower your experience, sign up for a free account today
            </p>
          </div>

          <form className="space-y-4">
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="ex. email@domain.com"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <p className="text-xs mt-2 text-left font-normal">
              By registering for an account, you are consenting to our{" "}
              <a
                href="#"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                Terms of Service
              </a>{" "}
              and confirming that you have reviewed and accepted the{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Global Privacy Policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full mt-4"
            >
              Get started free
            </button>
          </form>

          <p className="mt-6 text-sm text-center font-semibold">
            Already have an account?{" "}
            <a
              href="#"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Login
            </a>
          </p>

          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-sm text-gray-400">
              or better yet ...
            </span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-3 p-3 border rounded-full hover:bg-gray-50">
              <FcGoogle size={22} />
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 p-3 border rounded-full hover:bg-gray-50">
              <FaApple size={22} />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
