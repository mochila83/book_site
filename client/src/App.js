import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllAuthors from "./components/AllAuthors";
import Author from "./components/Author";
import "./App.css";
import GlobalNav from "./components/GlobalNav";
import styled from 'styled-components';
import EditAuthor from "./components/EditAuthor";
import NewAuthor from "./components/NewAuthor";



const BookClub = styled.div`
background-color: rgba(255, 255, 255, 0.5);
a {
  font-size: 30px;
  text-decoration: none;
  color: black;
}
a:hover {
  background-color: blue;
}
`

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <GlobalNav />

            <BookClub>
            <h1>Welcome To The Book Club!</h1>
            <div>
              <Link to="/">Authors</Link>
            </div>
            </BookClub>
          </div>
          <Route exact path="/" component={AllAuthors} />
          <Route exact path="/authors/:id" component={Author} />
          <Route exact path="/authors/:id/edit" component={EditAuthor} />
          <Route exact path="/author/new" component={NewAuthor} />
        </div>
      </Router>
    );
  }
}

export default App;
