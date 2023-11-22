import "./App.css";
import React from "react";
import MainHeader from "./components/MainHeader.jsx";
import ClockDesc from "./components/ClockDesc.jsx";
import MainTime from "./components/MainTime.jsx";
import MapImg from "./assets/map.png";

const App = () => {
  return (
    <>
      <div class="myCard">
        <div class="card__class">
          <div>
            <img class="card__image" src={MapImg} alt="Map" />
          </div>
          <div>
            <MainHeader />
            <ClockDesc />
            <MainTime />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
