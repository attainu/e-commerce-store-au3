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
      type: "FETCH_ALL_PRODUCTS",
      gender: this.props.match.params.gender,
      category: this.props.match.params.category_id
    });

    this.setState({ filters: true });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_ALL_PRODUCTS"
    });
    this.props.dispatch({
      type: "CLEAR_FILTERED_PRODUCTS"
    });
    this.props.dispatch({
      type: "CLEAR_FILTER_LIST"
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 bg-dark">
            {this.state.filters && <Filter />}
          </div>
          <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10">
            <div className="container-fluid">
              <div className="row">
                {this.props.filteredProducts.map(product => {
                  return (
                    <ProductTile key={product.product_id} product={product} />
                  );
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
