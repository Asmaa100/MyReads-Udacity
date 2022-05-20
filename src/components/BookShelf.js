import React from 'react'
import Book from './Book'
function BookShelf({ ShelfName, books, shelf, changeBooksShelf }) {
    const booksShelf = books.filter((book) => book.shelf === shelf)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ShelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksShelf.map((book) => (
                        <Book key={book.id} book={book} changeBooksShelf={changeBooksShelf} />
                    ))}
                </ol>
            </div>
        </div>

    )
}

export default BookShelf