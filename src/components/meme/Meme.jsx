import React, { useState } from "react";
import memesData from "../../memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");
  function getmemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    console.log(memeImage);
  }
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
    </div>
  );
};

export default Meme;
