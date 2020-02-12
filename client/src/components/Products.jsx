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
class Products extends Component {
  constructor() {
    super();
    this.state = {
      filters: false
    };
  }
  componentDidMount() {
    this.props.dispatch(
      fetchAllProducts(
        this.props.match.params.gender,
        this.props.match.params.category_id
      )
    );
    this.setState({ filters: true });
  }

  componentWillUnmount() {
    this.props.dispatch(clearAllProducts());
    this.props.dispatch(clearFilteredProducts());
    this.props.dispatch(clearFilterList());
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
              <p className="text-muted my-3">
                Total Products - {this.props.filteredProducts.length}
              </p>
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
