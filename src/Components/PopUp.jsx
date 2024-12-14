import { useState, useContext } from "react";
import useFetch from "../Utils/useFetch"
import UserContext from "../Utils/UserContext"

const PopUp = () => {
  const { isPopUpVisible, setIsPopUpVisible, searchParam, setSearchParam } = useContext(UserContext)

  const [parentChecked, setParentChecked] = useState(false);
  const [childrenChecked, setChildrenChecked] = useState([false, false, false]);
  
  const handleParentChange = (e) => {
    const isChecked = e.target.checked;
    setParentChecked(isChecked);
    setChildrenChecked([isChecked]); // Set all children to the same state
  };



const products = useFetch()
function onChangeHandler(e) {
    setSearchParam(e.target.value)
  }

  const closeHandleButtonClick = () => {
    setIsPopUpVisible(false)
  }
  return (<>
    {isPopUpVisible &&
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
              onChange={onChangeHandler}
              type="text"
              placeholder="Search products"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ul className="mt-4 space-y-2 max-h-[300px] overflow-y-auto">
              {products?.map((product, index) => (
                <>
                  <li
                    key={index}
                    className="flex justify-between items-center border p-2 rounded-md hover:bg-gray-100 w-full"
                  >
                    <div className="w-full">
                      <input type="checkbox" onChange={handleParentChange} className="mr-3" />
                      <span className="text-xm font-medium">{product.title}</span>
                      <div className="pl-6 pt10">
                        <div className="flex w-full items-center">
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-3" />
                            <span className="text-xm ml-1 ">{product.variants[0].title} - ({product.variants[0].inventory_quantity} Peas)</span>
                          </div>
                          <span className="text-xm  ml-auto">₹{product.variants[0].price}</span>
                        </div>
                      </div>
                    </div>
                  </li>

                </>)) || "have some Error"}
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