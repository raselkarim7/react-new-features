import React, { useEffect } from "react";
import { showNotification } from "./notifications";
import { createConnection } from "./chat";

export const serverUrl = "https://localhost:1234";

interface PropsInterface {
  roomId: string;
  theme: string;
}
const ChatRoom = ({ roomId, theme }: PropsInterface) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      showNotification("Connected!", theme);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, theme]);

  return (
    <p style={{ fontSize: "20px" }}>
      Welcome to the{" "}
      <b style={{ color: "orangered", fontSize: "24px" }}>{roomId}</b> room!
    </p>
  );
};

export default ChatRoom;
