import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import StartPage from "./pages/StartPage";
import EnterUsers from "./pages/EnterUsers";
import Scoring from "./pages/Scoring";
import Stats from "./pages/Stats";
import Info from "./pages/Info";
import Winner from "./pages/Winner";

function App() {
  return (
    <BrowserRouter>
      <div className="App-back">
        <Route exact path="/" component={(props) => <StartPage />} />
        <Route path="/begin" component={(props) => <EnterUsers />} />
        <Route path="/scoring" component={(props) => <Scoring />} />
        <Route path="/stats" component={(props) => <Stats />} />
        <Route path="/info" component={(props) => <Info />} />
        <Route path="/winner" component={(props) => <Winner />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
