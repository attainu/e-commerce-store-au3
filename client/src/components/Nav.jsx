import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import { Link } from "react-router-dom";
import { animationShow, animationHide } from "./logic/navAnimationLogic";
import CategoriesDropdown from "./CategoriesDropdown";
import CartDropdown from "./CartDropdown";
import WishlistDropdown from "./WishlistDropdown";
import Badge from "./Badge";
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        {this.state.width < 991 ? (
          <Link className="navbar-brand font-weight-bold " to="/">
            <h3 className="p-0 m-0 text-danger">SHOP</h3>
          </Link>
        ) : null}
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav bg-dark rounded mx-auto ">
            <li className={getClass()}>
              <Link className="nav-link font-weight-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown px-auto">
              <Link
                className="nav-link font-weight-bold"
                onMouseOver={e => animationShow(this.refs.maleCategoryBox)}
                onMouseLeave={e => animationHide(this.refs.maleCategoryBox)}
                to="/men"
              >
                Men
              </Link>
              <div
                className="dropdown-menu p-0"
                ref="maleCategoryBox"
                onMouseOver={e => animationShow(this.refs.maleCategoryBox)}
                onMouseLeave={e => animationHide(this.refs.maleCategoryBox)}
              >
                <CategoriesDropdown
                  gender="men"
                  categories={this.props.categories}
                />
              </div>
            </li>
            <li className="nav-item dropdown px-auto">
              <Link
                className="nav-link font-weight-bold"
                to="/women"
                onMouseOver={e => animationShow(this.refs.femaleCategoryBox)}
                onMouseLeave={e => animationHide(this.refs.femaleCategoryBox)}
              >
                Women
              </Link>
              <div
                className="dropdown-menu p-0"
                ref="femaleCategoryBox"
                onMouseOver={e => animationShow(this.refs.femaleCategoryBox)}
                onMouseLeave={e => animationHide(this.refs.femaleCategoryBox)}
              >
                <CategoriesDropdown
                  gender="women"
                  categories={this.props.categories}
                />
              </div>
            </li>
            {this.state.width > 991 ? (
              <li className="nav-item px-5 d-flex align-items-center">
                <Link className="nav-link font-weight-bold p-0 m-0" to="/">
                  <h3 className="p-0 m-0 text-danger">SHOP</h3>
                </Link>
              </li>
            ) : null}
            <li className="nav-item dropdown px-auto">
              <Link
                className="nav-link font-weight-bold"
                to="/wishlist"
                onMouseOver={e => animationShow(this.refs.wishlistBox)}
                onMouseLeave={e => animationHide(this.refs.wishlistBox)}
              >
                Wishlist
                <Badge count={this.props.wishlist.length} />
              </Link>
              <div
                className="dropdown-menu"
                style={{ width: "450px" }}
                ref="wishlistBox"
                onMouseOver={e => animationShow(this.refs.wishlistBox)}
                onMouseLeave={e => animationHide(this.refs.wishlistBox)}
              >
                <WishlistDropdown wishlist={this.props.wishlist} />
              </div>
            </li>
            <li className="nav-item dropdown px-auto">
              <Link
                className="nav-link font-weight-bold"
                to="/cart"
                onMouseOver={e => animationShow(this.refs.cartBox)}
                onMouseLeave={e => animationHide(this.refs.cartBox)}
              >
                Cart
                <Badge count={this.props.cart.length} />
              </Link>
              <div
                className="dropdown-menu"
                style={{ width: "400px" }}
                ref="cartBox"
                onMouseOver={e => animationShow(this.refs.cartBox)}
                onMouseLeave={e => animationHide(this.refs.cartBox)}
              >
                <CartDropdown cart={this.props.cart} />
              </div>
            </li>
            <li className="nav-item px-auto dropdown">
              <Link className="nav-link font-weight-bold" to="/login">
                LogIn
              </Link>
            </li>
            <li className="nav-item px-auto">
              <Link className="nav-link font-weight-bold" to="/signup">
                SignUp
              </Link>
            </li>
            {this.props.isLoggedIn ? (
              <li className="nav-item px-auto">
                <Link
                  className="nav-link text-danger font-weight-bold"
                  to="/logout"
                >
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
