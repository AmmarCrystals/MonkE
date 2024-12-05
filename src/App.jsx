import { useState } from "react";
import Dashboard from "./Components/Dashboard"
// import DataLayer from './Components/DataLayer';
import PopUp from "./Components/PopUp";
import './index.css';


function App() {
  const [command, setCommand ] = useState(false);
  return (
    <>
      {/* <DataLayer   /> */}
      <Dashboard value = {command}
      setvalue = {setCommand} />

      {command && <PopUp value = {command}
      setvalue = {setCommand}
      />}


    </>
  );
}

export default App;
