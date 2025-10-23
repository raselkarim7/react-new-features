import { useState } from "react";
import "./App.css";
import {
  UnderstandActivity,
  UnderstandEffectEvent,
  UnderstandEffectEventByChatRoomProblem,
  UnderstandEffectEventByChatRoomSolution,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>React 19.2 Features</h1>
        {/* <UnderstandEffectEvent /> */}
        <UnderstandEffectEventByChatRoomProblem />
        <UnderstandEffectEventByChatRoomSolution />
        <UnderstandActivity />
      </div>

      <div>
        <h1>React 19 Features</h1>
        <UnderstandEffectEvent />
      </div>
    </>
  );
}

export default App;
