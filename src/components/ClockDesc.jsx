import React from "react";
import FlagImg from "../assets/flag.png";

const ClockDesc = () => {
  return (
    <>
      <div>
        <center className="cloclDescription">
          <h3>This is the clock that shows the time of Nepal.</h3>
          <div>
            <img src={FlagImg} alt="Flag of Nepal" />
          </div>
        </center>
      </div>
    </>
  );
};

export default ClockDesc;
