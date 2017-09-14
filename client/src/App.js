import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllAuthors from "./components/AllAuthors";
import Author from "./components/Author";
import "./App.css";
import GlobalNav from "./components/GlobalNav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <GlobalNav />
            <h1>Book Club</h1>
            <div>
              <Link to="/">Authors</Link>
            </div>
          </div>
          <Route exact path="/" component={AllAuthors} />
          <Route path="/authors/:id" component={Author} />
        </div>
      </Router>
    );
  }
}

export default App;
