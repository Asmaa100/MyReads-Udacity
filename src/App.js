import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Books from "./components/Books";
import * as BooksApi from "./BooksAPI";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("")
  const [searchedBooks, setsearchedBooks] = useState([]);


  const getAllBooks = async () => {
    await BooksApi.getAll().then((response) =>
      setBooks(response)
    );
  };
  useEffect(() => {
    getAllBooks()
  });
  const changeBooksShelf = async (book, shelf) => {
    await BooksApi.update(book, shelf);
    getAllBooks()

  }
  const handleSearch = async (event) => {
    await setSearch(event.target.value);
    if (event.target.value.length) {
      getSearcheBooks(event.target.value)
    }
  }



  const getSearcheBooks = async (searchKey) => {
    await BooksApi.search(searchKey).then((response) => {
      if (response && response.length > 0) {
        setsearchedBooks(response.map((result) => {
          books.forEach((book) => {
            if (result.id === book.id) {
              result.shelf = book.shelf
            }
          })
          return result;
        })
        );
      }
      else {
        setsearchedBooks([])
      }
    });
  };


  return (
    <Router>
      <Routes>
        <Route
          path={"/"}
          exact
          element={
            <Books allBooks={books} changeBooksShelf={changeBooksShelf} />
          }
        />
        <Route
          path={"/search"}
          element={
            <Search handleSearch={handleSearch} search={search} searchedBooks={searchedBooks} changeBooksShelf={changeBooksShelf} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
