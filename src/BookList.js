import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

class BookList extends Component {
  render() {
    const { shelves } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.length > 0 ? (
              <div>
                {shelves.map((shelf, index) => {
                  return (
                    <div className="bookshelf" key={index}>
                      <h2 className="bookshelf-title">{shelf.group}</h2>
                      <div className="bookshelf-books">
                        {shelf.itens.length > 0 ? (
                          <ol className="books-grid">
                            {shelf.itens.map(item => {
                              return (
                                <Book key={item.id} book={item} />
                              );
                            })}
                          </ol>) 
                          :(
                          <div> não tem nada</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>):(
              <div>banana</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default BookList;
