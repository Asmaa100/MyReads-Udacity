import React from 'react'
import Book from './Book'
function ShelfSearch({ searchedBooks, changeBooksShelf }) {
    return (


        <div className="search-books-results">

            <ol className="books-grid">
                {searchedBooks.length > 0 ? (
                    searchedBooks.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            changeBooksShelf={changeBooksShelf}

                        />

                    ))
                ) : (
                    <h3 id="nobooks" >No results match your search</h3>
                )}
            </ol>
        </div>
    )
}

export default ShelfSearch