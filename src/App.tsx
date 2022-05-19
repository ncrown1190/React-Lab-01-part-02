import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Ad from "./Ad";
import { AdDesigner } from "./AdDesigner";
import Votes from "./Votes";

function App() {
  return (
    <div className="App">
      <header>
        <Header user="Chirpus" />
      </header>
      <div className="banner">
        <Ad flavor={"Strawberry"} fontSize={25} darkTheme={true} />
        <Ad flavor={"Chocolate"} fontSize={25} darkTheme={false} />
        <Ad flavor={"Vanilla"} fontSize={25} darkTheme={true} />
      </div>
      <div className="flex">
        <section>
          <AdDesigner />
        </section>
        <section>
          <Votes />
        </section>
      </div>
    </div>
  );
}

export default App;
