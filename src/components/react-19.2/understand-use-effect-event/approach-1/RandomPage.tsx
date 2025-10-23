import React, { useEffect, useState } from "react";
import { trackEvent } from "./localhelper";

interface PropsInterface {
  url: string;
  numberOfItems: number;
}
const RandomPage = ({ url, numberOfItems }: PropsInterface) => {
  const viewNumberOfItems = () => {
    console.log("View Number Of Items: ", numberOfItems);
  };

  useEffect(() => {
    function trackEvent() {
      console.log("page_view", { url });
      viewNumberOfItems();
    }
    trackEvent();
  }, [url]);

  return (
    <div>
      <p>
        Number of items:{" "}
        <b style={{ fontSize: "20px" }}>{numberOfItems}</b>{" "}
      </p>
    </div>
  );
};

export default RandomPage;
