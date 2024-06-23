import { useState, useEffect } from "react";

const App = () => {
  const [seconds, setSecond] = useState(0);
  const [active, setActive] = useState(false);

  let interval: number;
  useEffect(() => {
    if (active === true) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, seconds]);

  const startTimer = () => {
    setActive(true);
  };

  const stopTimer = () => {
    setActive(false);
  };

  const reset = () => {
    setSecond(0);
    setActive(false);
  };

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  return (
    <div className="w-[320px]  flex flex-col items-center justify-center gap-4">
      <span className="font-bold text-[32px]">{formatTime(seconds)}</span>

      <div className="w-full flex felx-row items-center justify-evenly">
        <button
          onClick={startTimer}
          disabled={active}
          className="border border-gray-400 rounded-md px-8 py-2"
        >
          Start
        </button>

        <button
          onClick={stopTimer}
          className="border border-gray-400 rounded-md px-8 py-2"
        >
          Stop
        </button>

        <button
          onClick={reset}
          className="border border-gray-400 rounded-md px-8 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
