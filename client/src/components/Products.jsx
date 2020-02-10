import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import ProductTile from "./ProductTile";
import Filter from "./Filter";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      filters: false
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: "CLEAR_FILTERED_PRODUCTS"
    });
    this.props.dispatch({
      type: "FETCH_ALL_PRODUCTS"
    });
    this.setState({ filters: true });
  }

  render() {
    const productstomap =
      this.props.filteredProducts.length > 0
        ? this.props.filteredProducts
        : this.props.products;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 bg-dark">
            {this.state.filters && <Filter />}
          </div>
          <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10">
            <div className="container-fluid">
              <div className="row">
                {productstomap.map(product => {
                  return <ProductTile product={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Products);
