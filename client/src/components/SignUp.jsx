import React from "react";
import NavigationBar from "./NavigationBar";
import LightDarkMode from "./LightDarkMode";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <>
      <NavigationBar />
      <LightDarkMode />

      <div className="flex justify-center p-8">
        <form className="w-full max-w-screen-xl">
          <div className="form-row-responsive flex gap-6">
            
            <div className="flex-3 flex flex-col">
              <label className="mb-2 font-medium text-blue-700 dark:text-gray-300">
                First name
              </label>
              <input
                type="text"
                className="py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="flex-3 flex flex-col">
              <label className="mb-2 font-medium text-gray-700 dark:text-gray-300">
                Last name
              </label>
              <input
                type="text"
                className="py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="mb-2 font-medium text-gray-700 dark:text-gray-300">
                Middle initial
              </label>
              <input
                type="text"
                maxLength="1"
                className="py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;