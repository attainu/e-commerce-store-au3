import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import "./men.css";
import CategoriesPage from "./CategoriesPage";
import { createCategories } from "../logic/categoryLogic";

class Men extends Component {
  render() {
    //  we need to extract categories belong to men

    const fCategories = createCategories(this.props.categories, "men");

    return (
      <div className="cat-page-container">
        <div className="container-fluid h-100">
          <div className="row h-100 d-flex justify-content-center align-items-center">
            <CategoriesPage gender={"men"} categories={fCategories} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Men);
