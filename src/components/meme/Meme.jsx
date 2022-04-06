import React, { useState } from "react";

const Meme = () => {
  return (
    <div>
      <main>
        <div className="form">
          <input type="text" className="form--input" placeholder="Top Text" />
          <input
            type="text"
            className="form--input"
            placeholder="Bottom Text"
          />
          <button type="submit" className="form--button">
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default Meme;
