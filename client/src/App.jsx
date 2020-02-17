import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Men from "./components/Men";
import Women from "./components/Women";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import { connect } from "react-redux";
import { mapStateToProps } from "./store";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid p-0 m-0">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route
            exact
            path="/cart"
            render={(
              x = "null",
              cartArr = this.props.cart,
              wishlist = this.props.wishlist,
              products = this.props.products
            ) => {
              return (
                <Cart
                  cartArr={cartArr}
                  wishlist={wishlist}
                  products={products}
                />
              );
            }}
          />
          <Route path="/shop/:gender/:category_id" component={Products} />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
