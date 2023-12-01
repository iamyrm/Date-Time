import React, { useEffect, useState } from "react";

const MainTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <center className="mainTime">
          <h5>
            <strong>
              The current date is: <span>{time.toLocaleDateString()}</span>
            </strong>
          </h5>
          <h5>
            <strong>
              The current time is: <span>{time.toLocaleTimeString()}</span>
            </strong>
          </h5>
        </center>
      </div>
    </>
  );
};

export default MainTime;
