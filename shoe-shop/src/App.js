import React from "react";
import "./App.css";
import { RouterPage } from "./components/RouterPage";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import ShoesSlide from "./components/AnimetionComponent/Slide";
import Viewpager from "./components/AnimetionComponent/Display/menItme/Men";
function App() {
  return (
    <div>
      <Viewpager />
      <RouterPage />
    </div>
  );
}

export default App;
