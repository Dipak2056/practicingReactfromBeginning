import React, { useState } from "react";

const Header = (props) => {
  return (
    <header className="memegenerator--header">
      <h2>🤣🤣</h2>
      <h2 className="header--title">Meme Generator </h2>
      <h4 className="header--sub">this is meme generator app</h4>
      <h3>Name:{props.user}</h3>
    </header>
  );
};

export default Header;
