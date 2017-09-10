import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks />} />
        <Route path="/SearchBooks" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
