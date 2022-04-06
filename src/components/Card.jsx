import React from "react";

export const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "Sold out";
  } else if (props.item.location === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {/* this is the example of conditional rendering in react please remember this */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`${props.item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img className="card--star" src="logo192.png" alt="" />
        <span>{props.item.title}</span>
        <hr />
        <span className="gray">{props.item.stats.reviewCount}.</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>
        <span className="bold">From ${props.item.price}</span>
      </p>
    </div>
  );
};
