import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import ShelfSearch from './ShelfSearch'
const Search = ({ handleSearch, searchedBooks, changeBooksShelf, search }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">

        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearch}
          />
        </div>
      </div>

      {search === "" ? (
        <h3 id="nobooks" className='border-bottom border-secondary mx-3' style={{ top: "70px", position: "fixed" }}>Search</h3>
      ) : (

        <ShelfSearch searchedBooks={searchedBooks} changeBooksShelf={changeBooksShelf} />
      )}
    </div>
  )
}

export default Search