import React, { useContext, Fragment, useEffect } from "react";
import { Context } from "../context/Context";
import Search from "./Search";
import Book from "./Book";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AllBooks = () => {
  const { books, clearSearch, searchedBooks, searchString } =
    useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "All Books || Oğuz BookStore";
  }, []);

  return (
    <div className="container">
      <div className="container search-header px-3 py-3 mx-auto text-center mt-sm-5">
        <h1 className="display-4 my-search ">Search Books</h1>
        <Search />
      </div>

      <h1
        style={{ marginLeft: "20px", color: "#000" }}
        className="display-4 text-center mb-3"
      >
        {searchString === null ? (
          "All Books"
        ) : (
          <Fragment>
            {" "}
            Searching for '{searchString}'
            <span onClick={() => clearSearch()} className="btn  ml-2 search-btn">
              X
            </span>
          </Fragment>
        )}
      </h1>
      <div className="row">
        {searchedBooks.length === 0
          ? books.map((book) => {
            const { id } = book;
            return <Book key={id} bookDetails={book} />;
          })
          : searchedBooks.map((book) => {
            const { id } = book;
            return <Book key={id} bookDetails={book} />;
          })}
      </div>
    </div>
  );
};

export default AllBooks;
