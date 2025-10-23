import { useState, useEffect } from "react";
import { useEffectEvent } from "react";

export default function TimerTwoFreezingCounter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  // // FREEZING COUNTER PROBLEM
  //     useEffect(() => {
  //     const id = setInterval(() => {
  //       setCount(c => c + increment);
  //     }, 1000);
  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, [increment]);

  // // FREEZING COUNTER ISSUE RESOLVED
  const callback = useEffectEvent(() => {
    setCount((c) => c + increment);
  });
  useEffect(() => {
    const id = setInterval(callback, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h3>
        <a
          href="https://react.dev/learn/separating-events-from-effects#fix-a-freezing-counter"
          target="_blank"
        >
          {" "}
          Freezing Counter
        </a>
      </h3>
      <h4>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h4>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          –
        </button>
        <b>{increment}</b>
        <button
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </p>
    </div>
  );
}
