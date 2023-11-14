import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Recipes from "./Components/Reciepes/Recipes";

function App() {
  const [catagory, setCatagory] = useState('')
  const handleChange = (e) => {
    setCatagory(e)
  }
  return (
    <>
      <NavBar handleChnage={handleChange} />
      <Recipes catagories={catagory} />
    </>
  )
}

export default App;
