import React, { Component } from "react";
import {FaShoppingBag} from 'react-icons/fa'
// import { connect } from "react-redux";
// import { mapStateToProps } from "../store";
import { Link } from "react-router-dom";

const CategoriesPage = props => {
  return (
    <>
      {props.categories.map(category => {
        return (
          <div
            className="col-md-2 col-sm-12 m-0 p-3 "
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          >
            <div className="container-fluid">
              <div className="row d-flex justify-content-center align-items-center">
                {/* <img
                  src="https://i.ibb.co/TTJPwZ7/shopping-bag-512.png"
                  alt="bag-icon"
                  style={{ width: "128px" }}
                /> */}
                <p style={{ fontSize: "5rem" }}>
                  {" "}
                  <FaShoppingBag />
                </p>
              </div>
              <div className="row mt-4 d-flex justify-content-center align-items-center">
                <Link
                  to={`/shop/men/${category.category_id}`}
                  className="px-3 text-white bg-dark py-3 rounded"
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
