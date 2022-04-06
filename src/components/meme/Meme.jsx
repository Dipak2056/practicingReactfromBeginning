import React, { useState } from "react";
import memesData from "../../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");
  const [things, setThings] = useState(["thing 1"]);
  function getmemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  function handleOnClick() {
    setThings((prev) => {
      return [...prev, `things ${things.length + 1}`];
    });
  }
  const newElems = things.map((item) => <p>{item}</p>);

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
          <button type="submit" className="form--button" onClick={getmemeImage}>
            Generate meme🤣
          </button>
        </div>
        <div className="image">
          <img src={`${memeImage}`} alt="" />
        </div>
      </main>
      <div className="add">
        <button onClick={handleOnClick}>Add Things</button>
        <div>{newElems}</div>
      </div>
    </div>
  );
};

export default Meme;
