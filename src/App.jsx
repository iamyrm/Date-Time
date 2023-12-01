import "./App.css";
import React from "react";
import MainHeader from "./components/MainHeader.jsx";
import ClockDesc from "./components/ClockDesc.jsx";
import MainTime from "./components/MainTime.jsx";
import MapImg from "./assets/map.png";

const App = () => {
  return (
    <>
      <div className="myCard">
        <div className="card__class">
          <div>
            <img className="card__image" src={MapImg} alt="Map" />
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
