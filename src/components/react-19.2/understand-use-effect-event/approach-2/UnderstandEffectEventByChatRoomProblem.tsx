import { useState, useEffect } from "react";
import { createConnection } from "./chat.ts";
import { showNotification } from "./notifications.ts";
import ChatRoom from "./ChatRoom.tsx";

const serverUrl = "https://localhost:1234";

const UnderstandEffectEventByChatRoomProblem = () => {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <h3>Understand Effect Event By Chat Room : PROBLEM</h3>
      <div>
        <span style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          <label>
            Choose the chat room:{" "}
            <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
              <option value="general">general</option>
              <option value="travel">travel</option>
              <option value="music">music</option>
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              checked={isDark}
              onChange={(e) => setIsDark(e.target.checked)}
            />
            Use dark theme
          </label>
        </span>
        <span>
          <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
        </span>
      </div>
    </div>
  );
};

export default UnderstandEffectEventByChatRoomProblem;
