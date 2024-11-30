import { useState } from "react";
// import MainBody from "./MainBody"
const PopUp =({value, setvalue})=>{
  console.log(value)

const closeHandleButtonClick = () =>{
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
            {[
              { name: 'broken fire', available: 1128, price: 10 },
              { name: 'Copy of broken fire', available: 14, price: 10 },
              { name: 'dawn field', available: 2, price: 2 },
              { name: 'Example Hat 1', available: 'Grey', price: 17.99 },
              { name: 'Example Hat 10', available: 'Grey', price: 17.45 },
              { name: 'Example Hat 100', available: 'Grey', price: 17.99 },
            ].map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded-md hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-sm font-medium">{product.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{product.available} available</p>
                  <p className="text-sm font-medium">₹{product.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
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