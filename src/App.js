import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import data from "./data";
import TravelJournal from "./components/TravelJournal";
import travelData from "./traveldata";
import TravelCard from "./components/TravelCard";
import Header from "./components/meme/Header";
import Meme from "./components/meme/Meme";
import boxesdata from "./boxes";
import Boxes from "./components/meme/Boxes";

function App() {
  // const cards = data.map((item) => {
  //   return <Card key={item.id} item={item} />;
  // });

  // const travelcard = travelData.map((item) => {
  //   return <TravelCard key={item.id} item={item} />;
  // });
  // console.log(travelData);
  const [user, setUser] = useState("Joe");
  const [squares, setSquares] = useState(boxesdata);
  const styles = {
    backgroundColor: "#222222",
  };
  const toggle = (id) => {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElements = squares.map((square) => (
    <Boxes id={square.id} on={square.on} toggle={toggle} />
  ));

  // to make the button to change the state
  const [isShown, setIsShown] = useState(true);
  const handleClick = () => {
    setIsShown(!isShown);
    console.log(isShown);
  };
  //for the messages check
  const [messages, setmessages] = useState(["a", "b"]);
  return (
    <div className="App">
      <Navbar />
      <button className="button" onClick={handleClick}>
        {isShown ? "show" : "hide"}
      </button>
      <div>{!isShown && <h2>hi i am visible</h2>}</div>
      <div>
        {messages.length === 0 ? (
          <p>you have unread messages</p>
        ) : (
          <p>you have {messages.length} unread messages.</p>
        )}
      </div>
      <hr />
      {squareElements}
      {/* <Hero />
      <section className="cards-list">{cards}</section>
      <section className="travel-journal">
        {" "}
        <TravelJournal travelcard={travelcard} />
      </section> */}
      <Header user={user} />
      <Meme user={user} />
    </div>
  );
}

export default App;
