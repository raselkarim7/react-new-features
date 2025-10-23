import { useState, useEffect } from "react";
import { useEffectEvent } from "react";

const TimerThreeNonAdjustableDelay = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [delay, setDelay] = useState(100);

  const onTick = useEffectEvent(() => {
    setCount((c) => c + increment);
  });

  const onMount = useEffectEvent((delayParam: number) => {
    return setInterval(() => {
      onTick();
    }, delayParam);
  });

  useEffect(() => {
    const id = onMount(delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);

  return (
    <div>
      <h3>
        <a
          target="_blank"
          href="https://react.dev/learn/separating-events-from-effects#fix-a-non-adjustable-delay"
        >
          Non Adjustable Delay
        </a>
      </h3>
      <h4>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h4>
      <hr />
      <p>
        Increment by:
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
      <p>
        Increment delay:
        <button
          disabled={delay === 100}
          onClick={() => {
            setDelay((d) => d - 100);
          }}
        >
          –100 ms
        </button>
        <b>{delay} ms</b>
        <button
          onClick={() => {
            setDelay((d) => d + 100);
          }}
        >
          +100 ms
        </button>
      </p>
    </div>
  );
};

export default TimerThreeNonAdjustableDelay;
