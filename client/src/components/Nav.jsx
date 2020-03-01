import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animationShow, animationHide } from "../logic/navAnimationLogic";
import CategoriesDropdown from "./CategoriesDropdown";
import CartDropdown from "./CartDropdown";
import WishlistDropdown from "./WishlistDropdown";
import LoginDropdown from "./LoginDropdown";
import Badge from "./Badge";
import { logout } from "../store/isLoggedIn/actions/isLoggedIn.actions";
import Search from "./Search";
class Nav extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.dispatch(logout());
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ minHeight: "10vh" }}
      >
        <Link className="navbar-brand font-weight-bold mr-5" to="/">
          <h3 className="p-0 m-0 text-danger">SHOP</h3>
        </Link>
        <ul className="navbar-nav bg-dark rounded ml-auto ">
          <li className="nav-item dropdown">
            <Search />
          </li>
        </ul>
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
          <ul className="navbar-nav bg-dark rounded ml-auto ">
            <li className="nav-item dropdown px-auto">
              <Link
                className="nav-link font-weight-bold"
                onMouseOver={e => animationShow(this.refs.maleCategoryBox)}
                onMouseLeave={e => animationHide(this.refs.maleCategoryBox)}
                to="/men"
              >
                Men
                <FaAngleDown className="ml-1" />
              </Link>
              <div
                className="dropdown-menu alert alert-secondary rounded p-0 m-0"
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
                <FaAngleDown className="ml-1" />
              </Link>
              <div
                className="dropdown-menu alert alert-secondary rounded p-0 m-0"
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

            <li className="nav-item dropdown px-auto">
              <Link
                className="nav-link font-weight-bold"
                to="/wishlist"
                // onMouseOver={e => animationShow(this.refs.wishlistBox)}
                // onMouseLeave={e => animationHide(this.refs.wishlistBox)}
              >
                Wishlist
                <Badge count={this.props.wishlist.length} />
              </Link>
              <div
                className="dropdown-menu alert alert-secondary rounded p-0 m-0"
                // style={{ width: "450px" }}
                ref="wishlistBox"
                // onMouseOver={e => animationShow(this.refs.wishlistBox)}
                // onMouseLeave={e => animationHide(this.refs.wishlistBox)}
              >
                {/* <WishlistDropdown wishlist={this.props.wishlist} /> */}
              </div>
            </li>
            <li className="nav-item dropdown px-auto">
              <Link
                className="nav-link font-weight-bold"
                to="/cart"
                // onMouseOver={e => animationShow(this.refs.cartBox)}
                // onMouseLeave={e => animationHide(this.refs.cartBox)}
              >
                Cart
                <Badge count={this.props.cart.length} />
              </Link>
              <div
                className="alert alert-secondary dropdown-menu rounded p-0 m-0"
                style={{ width: "400px" }}
                ref="cartBox"
                // onMouseOver={e => animationShow(this.refs.cartBox)}
                // onMouseLeave={e => animationHide(this.refs.cartBox)}
              >
                <CartDropdown cart={this.props.cart} />
              </div>
            </li>

            {this.props.isLoggedIn.success ? (
              <>
                <div className="nav-item dropdown px-auto">
                  <p
                    className="nav-link font-weight-bold m-0"
                    onMouseOver={e => animationShow(this.refs.userBox)}
                    onMouseLeave={e => animationHide(this.refs.userBox)}
                    style={{ cursor: "pointer" }}
                  >
                    Welcome, {this.props.isLoggedIn.firstname}{" "}
                    {this.props.isLoggedIn.lastname}
                    <FaAngleDown className="ml-1" />
                  </p>
                  <div
                    className="alert alert-secondary dropdown-menu rounded p-0 m-0"
                    ref="userBox"
                    onMouseOver={e => animationShow(this.refs.userBox)}
                    onMouseLeave={e => animationHide(this.refs.userBox)}
                  >
                    <LoginDropdown
                      handleLogout={this.handleLogout}
                      user_id={this.props.isLoggedIn.user_id}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Nav);
