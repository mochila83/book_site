import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthorList from "./components/AuthorList";
import Author from "./components/Author";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Book Club</h1>
            <div>
              <Link to="/">Author</Link>
              <Link to="/artist/1">Single Author</Link>
            </div>
          </div>
          <Route exact path="/" component={AuthorList} />
          <Route path="/artist/:id" component={Author} />
        </div>
      </Router>
    );
  }
}

export default App;
