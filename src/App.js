import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookList from "./BookList";
import SearchBooks from "./SearchBooks";
import { Route } from "react-router-dom";

class BooksApp extends Component {
  state = {
    shelves: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const booksGroupByShelf = books.reduce((obj, book) => {
        obj[book.shelf] = obj[book.shelf] || [];
        obj[book.shelf].push(book);
        return obj;
      }, {});

      const shelves = Object.keys(booksGroupByShelf).map(key => {
        return { group: key, itens: booksGroupByShelf[key] };
      });

      console.log("shelves", shelves);
      this.setState({ shelves });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BookList shelves={this.state.shelves} />}
        />
        <Route path="/SearchBooks" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
