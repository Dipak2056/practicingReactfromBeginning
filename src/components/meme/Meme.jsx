import React, { useState } from "react";
import memesData from "../../memesData";
import { Star } from "./Star";

const Meme = (props) => {
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

  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "0452450087",
    email: "paudelsantosh508@gmail.com",
    isfavourite: false,
  });
  let className = contact.isfavourite ? "star" : "star-empty";
  function toggleFavourite() {
    setContact((prev) => {
      return {
        ...contact,
        isfavourite: !prev.isfavourite,
      };
    });
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
            Generate meme🤣 for {props.user}
          </button>
        </div>
        <div className="image">
          <img src={`${memeImage}`} alt="" />
        </div>
      </main>
      <div className="card">
        <Star className={className} handleOnClick={toggleFavourite} />
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
        <h2>
          {contact.phone} {contact.email}
        </h2>
      </div>
      <div className="add">
        <button onClick={handleOnClick}>Add Things</button>
        <div>{newElems}</div>
      </div>
    </div>
  );
};

export default Meme;
