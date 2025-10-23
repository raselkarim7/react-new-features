import { Activity, useState } from "react";
import ExperimentalParagraph from "./ExperimentalParagraph";

const UnderstandActivity = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className="parent">
      <h3>Understand Activity</h3>
      <button
        onClick={() => {
          setHide((prev) => !prev);
        }}
      >
        Hide paragraph
      </button>
      <h4>Is Hidden: {hide}</h4>
      <Activity mode={hide ? "hidden" : "visible"}>
        <ExperimentalParagraph />
      </Activity>
    </div>
  );
};

export default UnderstandActivity;
