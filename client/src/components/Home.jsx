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
        <img
          src="https://i.ibb.co/pWyzP5k/i-Mac-1finalcover.png"
          style={{ width: "100vw", height: "90vh" }}
          alt=""
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
