import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import { fetchCategories } from "../store/categories/actions/categories.actions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
