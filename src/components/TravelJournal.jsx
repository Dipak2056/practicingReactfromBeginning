import React from "react";
import TravelCard from "./TravelCard";

const TravelJournal = (props) => {
  return (
    <div className="journal">
      <div className="journal--header">
        <span>
          <i class="fa-solid fa-earth-africa"></i>
        </span>
        <span>My Travel Journey</span>
      </div>
      <div>{props.travelcard}</div>
    </div>
  );
};

export default TravelJournal;
