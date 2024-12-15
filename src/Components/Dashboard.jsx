import React from "react";
import { useState, useContext } from "react"
import UserContext from "../Utils/UserContext";

const Dashboard = () => {
  const [inputsBox, setInputsBox] = useState([1])

  const { isPopUpVisible, setIsPopUpVisible } = useContext(UserContext)

  const openHandleButtonClick = () => {
    setIsPopUpVisible(true);
  }

  const handleAddInput = () => {
    setInputsBox([...inputsBox, inputsBox.length + 1])
  }

  return (
    <div className="master ml-20 mr-20">

      <div className="w-full flex justify-between mt-10">
        <p className="font-poppins font-medium text-4xl">Offer Funnel</p>
        <div className="flex gap-2">
          <p className="underline">Support </p>
          <p className="underline">| Talk To Expert</p>
        </div>
      </div>

      <hr class="border-gray-500 border-t-2 my-6 " />


      <div className="ml-4">

        <p className="font-bold m-2">Add Bundle Product (Max.4 Products)</p>

        <div className="flex gap-2 mt-4 itmes-center ">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#ecf005"></path> </g></svg>
          <p>Offer bunddle will se showun to the customer whenever any of the bunddle product are adde to the cart.</p>
        </div>
      </div>

      {inputsBox.map((inputsBox, index) => {
        return (<>
          <div key={index} className="flex mt-12 ml-12 ">
            <div className="flex items-center space-x-4">
              <div className="relative w-72">
                <ol>
                  <li  className="list-decimal pl-6 text-lg font-medium text-gray-700 space-y-2">
                    <input
                      type="text"
                      placeholder="Select Product"
                      className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />

                  </li>
                </ol>
                <span>{index + 1}. </span>

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

              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
                Add Discount
              </button>
            </div>
          </div>

        </>)
      })}


      <button
        onClick={handleAddInput}
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-green-600"
      >
        Add Product
      </button>
    </div>
  );

}

export default Dashboard