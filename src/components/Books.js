import React, { useContext, Fragment, useEffect } from "react";
import { Context } from "../context/Context";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Category from "./Category";
import BookCategory from "./BookCategory";
const Books = () => {
  const { categories } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "All Categories || Oğuz Bookstore"
  })

  return (
    <>
      <div className="row">
        {categories.length > 0 ? (
          categories.map((category) => {
            const { id } = category;
            return <Category key={id} categoryDetails={category} />;
          })
        ) : (
          <BookCategory />
        )}
      </div>
    </>
  );
};

export default Books;
