import React, { useState } from "react";

const Windowtracker = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  React.useEffect(function () {
    function watchwidth() {
      setWindowWidth(window.innerWidth);
    }
    return function () {
      window.removeEventListener("resize", watchwidth);
    };
  }, []);
  return (
    <div>
      <button onClick={() => handleClick}>Toggle window tracker</button>
      <h1>window width: {windowWidth}</h1>
    </div>
  );
};

export default Windowtracker;
