import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Category = ({ categoryDetails }) => {
  const { id, title, imageSrc } = categoryDetails;

  const scrollFunc = () => {
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column my-cate">
      <div className="cover-img">
        <Link to={"/books/category/" + id} onClick={scrollFunc}>
          <img
            className="my-img"
            src={imageSrc}
            alt=""
            style={{
              boxShadow: "8px 8px 15px rgba(74, 0, 88, 0.877)",
            }}
          />
          <div className="details">
            <div className="content">
              <h5 className="my-h5">{title}</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
