import { useState } from "react";
import Dashboard from "./Components/Dashboard"
// import DataLayer from './Components/DataLayer';
import PopUp from "./Components/PopUp";
import './index.css';


function App() {
  const [command, setCommand ] = useState(false);
  const [inputChange, setInputChange] = useState("Hat")
  console.log(inputChange)
  return (
    <>
      {/* <DataLayer   /> */}

      <useFetch inputChange={inputChange}
      setInputChange ={setInputChange}/>
      
      <Dashboard value = {command}
      setvalue = {setCommand} />

      {command && <PopUp value = {command}
      setvalue = {setCommand}
      inputChange={inputChange}
      setInputChange ={setInputChange}
      />}


    </>
  );
}

export default App;
