import React from 'react'

function Book({ book, changeBooksShelf }) {
  const changeShelf = (event) => {
    changeBooksShelf(book, event.target.value)
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <img
            className="book-cover"
            style={{
              width: 128,
              height: 193,

            }}
            src={book.imageLinks ? book.imageLinks.thumbnail : "https://ik.imagekit.io/upquizbqg/No_Image_Available_QdttPgGzm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652834944592"}
          />
          <div className="book-shelf-changer">
            <select onChange={changeShelf} value={book.shelf ? book.shelf : "none"} >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>

  )
}

export default Book