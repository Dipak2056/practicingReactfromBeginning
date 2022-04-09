import React from "react";

export const Star = (props) => {
  return (
    <div>
      <div onClick={props.handleOnClick} className={props.className}></div>
    </div>
  );
};
