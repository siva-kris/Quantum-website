import React, { useState, useEffect } from "react";

const Counter = ({ iconClass, targetNumber, duration, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const increment = end / (duration / 100);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <div className="counter col_fourth">
      <i className={`fa ${iconClass} fa-2x`}></i>
      <h2 className="timer count-title count-number">
        {count.toLocaleString()}
      </h2>
      <p className="count-text">{text}</p>
    </div>
  );
};

export default Counter;
