import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [!isRunning]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  return (
    <div>
      <h1>Timer App</h1>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}

export default Timer;
