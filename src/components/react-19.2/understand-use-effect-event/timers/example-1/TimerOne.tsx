import { useState, useEffect, useEffectEvent, useCallback } from "react";

export default function TimerOne() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  // Approach 3: BEST_APPROACH (every time you click, useEffect not called again & again)
  const callback = useEffectEvent(() => {
    setCount((c) => c + increment);
  });
  useEffect(() => {
    const id = setInterval(callback, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  // ----------------------------------------

  // Approach 2: (every time you click, you see the useEffect called.)
  // const callback = useCallback(() => {
  //   setCount((c) => c + increment);
  // }, [setCount, increment]);

  // useEffect(() => {
  //   const id = setInterval(callback, 1000);
  //   return () => {
  //      console.log('1. destroy useEffect: ', id)
  //     clearInterval(id);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [callback]);

  // ----------------------------------------

  //   // Approach 1: (every time you click, you see the useEffect called.)
  //     useEffect(() => {
  //       const id = setInterval(() => {
  //         setCount((c) => c + increment);
  //       }, 1000);
  //       return () => {
  //           console.log('2. destroy useEffect: ', id)
  //         clearInterval(id);
  //       };
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //     }, [increment]);

  return (
    <div>
      <h3>
        <a
          href="https://react.dev/learn/separating-events-from-effects#fix-a-variable-that-doesnt-update"
          target="_blank"
        >
          Fix a variable that doesn’t update {`[ useEffectEvent working FINE]`}
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
