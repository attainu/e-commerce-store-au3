import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import ProductTile from "./ProductTile";
import Filter from "./Filter";
import {
  fetchAllProducts,
  clearAllProducts
} from "../store/products/actions/products.actions";
import { clearFilteredProducts } from "../store/filteredProducts/actions/filteredProducts.actions";
import { clearFilterList } from "../store/filterList/actions/filterList.actions";
import Pagination from "./Pagination";
import Animation from "./Animation";
class Products extends Component {
  constructor() {
    super();
    this.state = {
      fetching: false,
      filters: false,
      itemsPerPage: 10,
      paginatedItems: null,
      currentPage: 1,
      lastIndex: null,
      firstIndex: null
    };
  }
  componentDidMount() {
    this.props.dispatch(clearAllProducts());
    this.props.dispatch(clearFilteredProducts());
    this.props.dispatch(
      fetchAllProducts(
        this.props.match.params.gender,
        this.props.match.params.category_id
      )
    );
    this.setState({ filters: true });
  }

  getCategoryName = id => {
    let category_name;
    this.props.categories.map(c => {
      if (c.category_id === parseInt(id)) {
        category_name = c.category_name;
      }
    });
    return category_name;
  };

  breadCrumb() {
    return (
      <h6>{`${this.props.match.params.gender
        .toLowerCase()
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ")}
      /
          ${this.getCategoryName(this.props.match.params.category_id)
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
      `}</h6>
    );
  }

  setCurrentPage = n => {
    this.setState({ currentPage: n });
  };

  componentWillUnmount() {
    this.props.dispatch(clearAllProducts());
    this.props.dispatch(clearFilteredProducts());
    this.props.dispatch(clearFilterList());
  }

  render() {
    const lastIndex = this.state.currentPage * this.state.itemsPerPage;
    const firstIndex = lastIndex - this.state.itemsPerPage;

    return (
      <div className="container-fluid">
        <div className="row h-100">
          <div
            className="col-xs-4 col-sm-5 col-md-4 col-lg-2 shadow-lg"
            style={{color:"black !important",backgroundColor:"white"}}
          >
            {this.state.filters && <Filter />}
          </div>
          <div className="col-xs-8 h-100 col-sm-7 col-md-8 col-lg-10">
            <div className="container-fluid">
              <div className="row my-3">
                <div className="col-12">{this.breadCrumb()}</div>
              </div>
              <div className="row">
                <div className="col-6  d-flex justify-content-start align-items-center">
                  <p className="text-muted font-weight-bold my-3">
                    {`Showing ${firstIndex + 1} - ${lastIndex} of ${
                      this.props.filteredProducts.length
                    }`}
                  </p>
                </div>
                <div className="col-6  d-flex justify-content-end align-items-center">
                  <label className="font-weight-bold m-0 px-3">
                    Max Results To Show :
                  </label>
                  <select
                    className="custom-select w-25"
                    onClick={e =>
                      this.setState({ itemsPerPage: e.target.value })
                    }
                  >
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                </div>
              </div>

              <div className="row">
                {this.props.filteredProducts.length > 0 ? (
                  this.props.filteredProducts
                    .slice(firstIndex, lastIndex)
                    .map(product => {
                      return (
                        <ProductTile
                          key={product.product_id}
                          product={product}
                          cart={this.props.cart}
                          wishlist={this.props.wishlist}
                        />
                      );
                    })
                ) : (
                  <Animation />
                )}
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <Pagination
                  itemsPerPage={this.state.itemsPerPage}
                  totalItems={this.props.filteredProducts.length}
                  setCurrentPage={this.setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Products);
