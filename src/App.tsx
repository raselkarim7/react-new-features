import { useState } from "react";
import "./App.css";
import {
  TimerOne,
  TimerTwoFreezingCounter,
  TimerThreeNonAdjustableDelay,
  ChatRoomFixDelayedNotification,
  UnderstandActivity,
  UnderstandEffectEvent,
  UnderstandEffectEventByChatRoomProblem,
  UnderstandEffectEventByChatRoomSolution,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="parent-level-2">
        <h1>React 19.2 Features</h1>
        <div className="parent-level-1">
          <h2>Learning useEffectEvent</h2>
          {/* <UnderstandEffectEvent /> */}
          <UnderstandEffectEventByChatRoomProblem />
          <UnderstandEffectEventByChatRoomSolution />
          <TimerOne />
          <TimerTwoFreezingCounter />
          <TimerThreeNonAdjustableDelay />
          <ChatRoomFixDelayedNotification />
        </div>

        <UnderstandActivity />
      </div>

      <div className="parent-level-2">
        <h1>React 19 Features</h1>
        <UnderstandEffectEvent />
      </div>
    </>
  );
}

export default App;
