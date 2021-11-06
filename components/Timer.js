import React, { useState, useEffect } from "react";

const Timer = () => {
  const testZero = "0";
  const [time, setTime] = useState(300);
  const [minute, setMinute] = useState("5");
  const [second, setSecond] = useState("00");

  useEffect(() => {
    if (time < 1) {
      console.log("left to order");
    }
    setMinute(Math.floor(time / 60));
    if (time % 60 < 10) {
      setSecond(testZero + (time % 60));
    } else {
      setSecond(time % 60);
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time < 1) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className="border-2 border-solid rounded-timer border-RedVermilionBird box-border flex flex-col items-center justify-between font-body text-RedVermilionBird px-timerLR py-timerTB w-w79 h-w60 leading-A18 tracking-A8">
      <div className="font-semibold text-header">
        {minute}:{second}
      </div>
      <span className="text-about w-w59 mt-1">left to order</span>
    </div>
  );
};

export default Timer;
