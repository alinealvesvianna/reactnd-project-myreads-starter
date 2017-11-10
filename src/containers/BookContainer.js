import React, { Component } from "react"
import "./../App.css"
import { Link } from "react-router-dom"
import { getAll, update } from "../BooksAPI"
import Book from "./../components/Book"
import {updateShelvesState} from '../utils/utils'

class BookContainer extends Component {
  state = {
    shelves: []
  }

  componentDidMount() {
    getAll()
      .then(books => updateShelvesState(books))
      .then(shelves => {this.setState({shelves})
        console.log(this.state.shelves[0].items)
    })
      .catch(error => console.log(error))
  }

  onChangeShelf = (book, shelf) => {
    update(book, shelf)
      .then(getAll)
      .then(data => updateShelvesState(data))
      .then(shelves => this.setState({shelves}))
      .catch(error => console.log(error))
  }

  render() {
    const { shelves } = this.state

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {shelves.map((shelf, index) => {
                return (
                  <div key={index} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.group}</h2>
                    <div className="bookshelf-books">
                      {shelf.items.length > 0 && (
                        <ol className="books-grid">
                          {shelf.items.map(item => (
                            <Book
                              key={item.id}
                              book={item}
                              onChangeShelf={this.onChangeShelf}
                            />
                          ))}
                        </ol>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BookContainer
