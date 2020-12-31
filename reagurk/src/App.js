import React from 'react';
import {ParkingPage} from "./components/ParkingPage";
import {Discord} from "./components/Discord"
import {Cards} from "./components/Cards";
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/discord">
            <Discord />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
            <div>
              <ParkingPage />
              <Cards />
            </div>
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
