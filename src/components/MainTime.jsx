import React from "react";

const MainTime = () => {
  const current = new Date();
  return (
    <>
      <div>
        <center className="mainTime">
          <h5>
            <strong>
              The current date is: <span>{current.toLocaleDateString()}</span>
            </strong>
          </h5>
          <h5>
            <strong>
              The current time is: <span>{current.toLocaleTimeString()}</span>
            </strong>
          </h5>
        </center>
      </div>
    </>
  );
};

export default MainTime;
