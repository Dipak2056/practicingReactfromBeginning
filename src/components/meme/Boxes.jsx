import React, { useState } from "react";

const Boxes = (props) => {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
};

export default Boxes;
