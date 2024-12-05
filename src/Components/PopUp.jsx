import { useState } from "react";
import useFetch from "../Utils/useFetch"


const PopUp = ({ value, setvalue }) => {

  const products = useFetch()


  console.log(products)

  const closeHandleButtonClick = () => {
    setvalue(false);
  }
  return (<>
    {
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <div className="w-[500px] bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="text-lg font-medium">Add products</h2>
            <button onClick={closeHandleButtonClick} className="text-gray-600 hover:text-black">
              ✕
            </button>
          </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Search products"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ul className="mt-4 space-y-2 max-h-[300px] overflow-y-auto">
              {products?.map((product, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border p-2 rounded-md hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-xm font-medium">{product.title}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{product?.status} </p>
                    <p className="text-sm font-medium">₹{product?.variants[0]?.price}</p>
                  </div>
                </li>
              )) || "have some Error"}
            </ul>
          </div>
          <div className="flex justify-end p-4 border-t">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add
            </button>
          </div>
        </div>
      </div>}

  </>
  );
}



export default PopUp