import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/index";
class Filter extends Component {
  isChecked = (val, arr) => {
    return arr.indexOf(val) != -1 ? true : false;
  };

  addFilter = (e, f) => {
    // f is filters Apllied at current time

    if (e.target.name === "brand") {
      if (f.indexOf(e.target.value) !== -1) {
        this.props.dispatch({
          type: "REMOVE_BRAND_FILTER",
          payload: e.target.value
        });
      } else {
        this.props.dispatch({
          type: "ADD_BRAND_FILTER",
          payload: e.target.value
        });
      }
    }
    if (e.target.name === "color") {
      console.log("here");
      if (f.indexOf(e.target.value) !== -1) {
        this.props.dispatch({
          type: "REMOVE_COLOR_FILTER",
          payload: e.target.value
        });
      } else {
        this.props.dispatch({
          type: "ADD_COLOR_FILTER",
          payload: e.target.value
        });
      }
    }
  };

  clearFilter = type => {
    if (type === "brands") {
      this.props.dispatch({
        type: "CLEAR_BRAND_FILTER"
      });
    }if (type==="colors"){
      this.props.dispatch({
        type: "CLEAR_COLOR_FILTER"
      });
    }
  };

  componentDidMount() {
    this.props.dispatch({
      type: "CREATE_FILTER_LIST",
      payload: this.props.products
    });
  }

  render() {
    return (
      <div className="container text-white d-flex justify-content-center">
        <div className="">
          <h2 className="mb-5 mt-2">Filters</h2>
          <h5>Brands</h5>
          {/* this we need to map  */}
          <div className="m-3">
            {this.props.filterList.brands.map((brand, index) => {
              return (
                <div key={index + 100} className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      checked={this.isChecked(brand, this.props.brandFilter)}
                      onChange={e => this.addFilter(e, this.props.brandFilter)}
                      value={brand}
                      className="form-check-input"
                      name="brand"
                    />
                    {brand}
                  </label>
                </div>
              );
            })}
            <p
              className="text-danger font-weight-bold text-right"
              style={{ cursor: "pointer" }}
              onClick={e => this.clearFilter("brands")}
            >
              Clear All
            </p>
          </div>
          <h5>Color</h5>
          {/* this we need to map  */}
          <div className="m-3">
            {this.props.filterList.colors.map((color, index) => {
              return (
                <div key={index + 200} className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      checked={this.isChecked(color, this.props.colorFilter)}
                      onChange={e => this.addFilter(e, this.props.colorFilter)}
                      value={color}
                      className="form-check-input"
                      name="color"
                    />
                    {color}
                  </label>
                </div>
              );
            })}
            <p
              className="text-danger font-weight-bold text-right"
              style={{ cursor: "pointer" }}
              onClick={e => this.clearFilter("colors")}
            >
              Clear All
            </p>
          </div>
          <h5>Range</h5>
          this we need to think a slider or ranges ???
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Filter);
