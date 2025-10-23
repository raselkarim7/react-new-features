import React, { useState } from "react";
import RandomPage from "./RandomPage";

const SAMPLE_URLS = [
  "https://www.example.com/login",
  "https://www.example.com/videos/video-title",
  "https://www.example.com/archive/2023/january",
  "https://www.example.com/terms-and-conditions",
  "https://www.example.com/404",
  "https://www.example.com/privacy-policy",
  "https://www.example.com/newsletter/subscribe",
  "https://www.example.com/downloads/file-name.pdf",
  "https://www.facebook.com/example",
  "https://www.example.com/products/product-name",
];

const UnderstandEffectEvent = () => {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const handleChangeUrl = () => {
    const num = Math.ceil(Math.random() * 10);
    setCurrentUrlIndex(num);
  };

  return (
    <div className="parent">
      <h3>Understand useEffectEvent hook </h3>
      <div>Current URL: {SAMPLE_URLS[currentUrlIndex]}</div>
      <div>
        <button onClick={handleChangeUrl}>Set Current Url</button>
      </div>
      <div>
        <h4>Random Page</h4>
        <button
          onClick={() => {
            setNumberOfItems(numberOfItems + 1);
          }}
        >
          Add Item
        </button>
        <RandomPage
          url={SAMPLE_URLS[currentUrlIndex]}
          numberOfItems={numberOfItems}
        />
      </div>
    </div>
  );
};

export default UnderstandEffectEvent;
