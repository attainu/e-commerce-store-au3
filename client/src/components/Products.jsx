import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import ProductTile from "./ProductTile";
import Filter from "./Filter";

class Products extends Component {
 

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_ALL_PRODUCTS"
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 bg-dark">
            <Filter />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-10 col-lg-10">
            <div className="container-fluid">
              <div className="row">
                {this.props.products.map(product => {
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
