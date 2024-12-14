import React from "react";
import {useState, useContext} from "react"
import UserContext from "../Utils/UserContext";

const Dashboard =()=>{


  const {isPopUpVisible, setIsPopUpVisible} = useContext(UserContext)

const openHandleButtonClick = () =>{
  setIsPopUpVisible(true);
}


 
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex items-center space-x-4"> 
          {/* Input Container */}
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Select Product"
              className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            {/* Icon inside input */}
            <button onClick={openHandleButtonClick} className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 5.487a2.5 2.5 0 113.536 3.535L7.125 22.293a1 1 0 01-.708.293H3.5v-2.917a1 1 0 01.293-.707L16.862 5.487z"
                />
              </svg>
            </button>
          </div>
  
          {/* Add Discount Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
            Add Discount
          </button>
        </div>
      </div>
    );

}

export default Dashboard