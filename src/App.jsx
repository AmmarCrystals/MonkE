import { useState, useContext } from "react";
import Dashboard from "./Components/Dashboard"
// import DataLayer from './Components/DataLayer';
import PopUp from "./Components/PopUp";
import './index.css';
import UserContext from "./Utils/UserContext"



function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false)

  return (
    <UserContext.Provider value={{isPopUpVisible, setIsPopUpVisible}} >
      <useFetch />
      <Dashboard />
      <PopUp />
    </UserContext.Provider>
  );
}

export default App;
