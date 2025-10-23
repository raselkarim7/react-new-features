import React, { useEffect, useEffectEvent } from "react";
import { showNotification } from "./notifications";
import { createConnection } from "./chat";

export const serverUrl = "https://localhost:1234";

interface PropsInterface {
  roomId: string;
  theme: string;
}
const ChatRoom = ({ roomId, theme }: PropsInterface) => {
  const onConnected = useEffectEvent((roomIdParam: string) => {
    showNotification("Welcome to " + roomIdParam, theme);
  });

  useEffect(() => {
    let timerId: number;
    const connection = createConnection(serverUrl, roomId);
    connection.on("connected", () => {
      timerId = setTimeout(() => {
        onConnected(roomId);
      }, 2000);
    });
    connection.connect();
    return () => {
      connection.disconnect();
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [roomId]);

  return (
    <>
      <p style={{ fontSize: "20px" }}>
        Welcome to the{" "}
        <b style={{ color: "orangered", fontSize: "24px" }}>{roomId}</b> room!
      </p>
    </>
  );
};

export default ChatRoom;
