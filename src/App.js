import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardA } from "./projects/Cards/CardA";
import { CardB } from "./projects/Cards/CardB";
import { Slider } from "./projects/Slider/Slider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/card-a">CardA</Link> | <Link to="card-b">CardB</Link> |{" "}
          <Link to="slider">Slider</Link>
        </nav>
        <Routes>
          <Route index path="card-a" element={<CardA />} />
          <Route path="card-b" element={<CardB />} />
          <Route path="slider" element={<Slider />}>
            {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
