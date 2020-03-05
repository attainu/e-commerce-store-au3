import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/index";
import { FaFilter } from "react-icons/fa";
import {
  addBrandFilter,
  removeBrandFilter,
  clearBrandFilter
} from "../store/filter/actions/brandFilter.actions";
import {
  addColorFilter,
  removeColorFilter,
  clearColorFilter
} from "../store/filter/actions/colorFilter.actions";
import { createFilterList } from "../store/filterList/actions/filterList.actions";
import { getCount } from "../logic/filterLogic";
import Badge from "./Badge";

class Filter extends Component {
  isChecked = (val, arr) => {
    return arr.indexOf(val) !== -1 ? true : false;
  };

  addFilter = (e, f) => {
    // f is filters Apllied at current time
    if (e.target.name === "brand") {
      if (f.includes(e.target.value))
        this.props.dispatch(removeBrandFilter(e.target.value));
      else this.props.dispatch(addBrandFilter(e.target.value));
    }
    if (e.target.name === "color") {
      if (f.includes(e.target.value))
        this.props.dispatch(removeColorFilter(e.target.value));
      else this.props.dispatch(addColorFilter(e.target.value));
    }
  };

  clearFilter = type => {
    if (type === "brands") {
      this.props.dispatch(clearBrandFilter());
    }

    if (type === "colors") {
      this.props.dispatch(clearColorFilter());
    }
  };

  componentDidMount() {
    this.props.dispatch(createFilterList(this.props.products));
  }

  render() {
    return (
      <div className="container h-100 text-white d-flex justify-content-center">
        <div className="mb-5  mt-2">
          <div className="d-flex  justify-content-between align-items-center my-3">
            <h4>Filters</h4>
            <FaFilter className="mx-2" />
          </div>
          <h5 style={{color:"black"}}>
            Brands
            <Badge count={this.props.filterList.brands.length} />
          </h5>
          <div className="m-3" style={{color:"black"}}>
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
                    <Badge
                      count={getCount(
                        this.props.filteredProducts,
                        "brand",
                        brand
                      )}
                    />
                  </label>
                </div>
              );
            })}
            <p
              className="text-danger font-weight-bold my-2"
              style={{ cursor: "pointer" }}
              onClick={e => this.clearFilter("brands")}
            >
              Clear All
            </p>
          </div>
          <h5 style={{color:"black"}}>
            Color <Badge count={this.props.filterList.colors.length} />
          </h5>
          {/* this we need to map  */}
          <div className="m-3" style={{color:"black"}}>
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

                    <Badge
                      count={getCount(
                        this.props.filteredProducts,
                        "color",
                        color
                      )}
                    />
                  </label>
                </div>
              );
            })}
            <p
              className="text-danger font-weight-bold my-3"
              style={{ cursor: "pointer" }}
              onClick={e => this.clearFilter("colors")}
            >
              Clear All
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Filter);


