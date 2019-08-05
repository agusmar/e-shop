import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Carousel from "./Carousel";
import Item from "./Item";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact component={Home} /> 
          <Route path="/producto/:id" exact component={Item} /> 
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
