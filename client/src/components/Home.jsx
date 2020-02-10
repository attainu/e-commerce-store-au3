import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_CATEGORIES"
    });
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
