import React from "react";

const TravelCard = (props) => {
  let badgeText;
  if (props.item.location === "Nepal") {
    badgeText = "Nepal";
  } else if (props.item.location === "Japan") {
    badgeText = "Japan";
  }
  return (
    <div>
      <div className="journal--body">
        {badgeText && <div className="locationbadge">{badgeText}</div>}
        <div className="journal--card">
          <div className="journal--body_image">
            <img src={`${props.item.imageUrl}`} alt="" />
          </div>
          <div className="journal--body_main">
            <span>
              <i className="fa-solid fa-location-dot"></i>
              {props.item.location}
            </span>
            <span>
              <a href={props.item.googleMapsUrl}>See in google maps</a>
            </span>
            <br />
            <h2 className="journal--body_title">{props.item.title}</h2>
            <p className="journal--body_startdate">
              <span className="start-date">{props.item.startDate}</span>{" "}
              <span className="end-date">{props.item.endDate}</span>
            </p>
            <p className="journal--body_definition">{props.item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
