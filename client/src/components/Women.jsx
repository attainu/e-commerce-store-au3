import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import "./men.css";
import CategoriesPage from "./CategoriesPage";
import { createCategories } from "./categoryLogic";
class Women extends Component {
  render() {
    //  we need to extract categories belong to men
    const fCategories = createCategories(this.props.categories, "women");
    console.log(fCategories);
    return (
      <div className="cat-page-container">
        <div className="container-fluid h-100">
          <div className="row h-100 d-flex justify-content-center align-items-center">
            <CategoriesPage categories={fCategories} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Women);
