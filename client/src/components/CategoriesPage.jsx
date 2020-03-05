import React from "react";
import { FaTshirt } from "react-icons/fa";
import { GiTShirt } from "react-icons/gi";
import { Link } from "react-router-dom";

const CategoriesPage = props => {
  return (
    <>
      {props.categories.map((category, index) => {
        return (
          <div
            className="border border-2 border-dark col-md-2 col-sm-12 m-0 p-3"
            key={index + 64573}
          >
            <div className="container-fluid">
              <div className="row d-flex justify-content-center align-items-center">
                <p style={{ fontSize: "5rem" }}>
                  {window.location.pathname === "/men" ? (
                    <FaTshirt className="" />
                  ) : (
                    <GiTShirt />
                  )}
                </p>
              </div>
              <div className="row mt-4 d-flex justify-content-center align-items-center ">
                <Link
                  to={`/shop/${props.gender}/${category.category_id}`}
                  className="px-3 text-white bg-dark py-3 rounded-0"
                >
                  {category.category_name.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoriesPage;
