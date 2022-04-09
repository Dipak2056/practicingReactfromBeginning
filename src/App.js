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

function App() {
  // const cards = data.map((item) => {
  //   return <Card key={item.id} item={item} />;
  // });

  // const travelcard = travelData.map((item) => {
  //   return <TravelCard key={item.id} item={item} />;
  // });
  // console.log(travelData);
  const [user, setUser] = useState("Joe");

  return (
    <div className="App">
      <Navbar />
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
