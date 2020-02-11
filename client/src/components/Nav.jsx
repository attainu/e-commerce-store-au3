import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import { Link } from "react-router-dom";
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      width: 800
    };
  }
  updateDimensions = () => {
    let update_width = window.innerWidth;
    this.setState({ width: update_width });
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const getClass = () => {
      let classname = this.state.width < 991 ? "nav-item" : "nav-item px-auto";
      return classname;
    };
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        {this.state.width < 991 ? (
          <Link class="navbar-brand font-weight-bold " to="/">
            <h3 className="p-0 m-0 text-danger">SHOP</h3>
          </Link>
        ) : null}
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="navbar-nav bg-dark rounded mx-auto ">
            <li class={getClass()}>
              <Link class="nav-link font-weight-bold" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item px-auto">
              <Link class="nav-link font-weight-bold" to="/men">
                Men
              </Link>
            </li>
            <li class="nav-item px-auto">
              <Link class="nav-link font-weight-bold" to="/women">
                Women
              </Link>
            </li>
            {this.state.width > 991 ? (
              <li class="nav-item px-5 d-flex align-items-center">
                <Link class="nav-link font-weight-bold p-0 m-0" to="/">
                  <h3 className="p-0 m-0 text-danger">SHOP</h3>
                </Link>
              </li>
            ) : null}
            <li class="nav-item px-auto">
              <Link class="nav-link font-weight-bold" to="/about">
                Wishlist
              </Link>
            </li>
            <li class="nav-item px-auto">
              <Link class="nav-link font-weight-bold" to="/about">
                Cart
              </Link>
            </li>
            <li class="nav-item px-auto">
              <Link class="nav-link font-weight-bold" to="/login">
                LogIn
              </Link>
            </li>
            <li class="nav-item px-auto">
              <Link class="nav-link font-weight-bold" to="/signup">
                SignUp
              </Link>
            </li>
            {this.props.isLoggedIn ? (
              <li class="nav-item px-auto">
                <Link class="nav-link font-weight-bold" to="/logout">
                  Logout
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Nav);
