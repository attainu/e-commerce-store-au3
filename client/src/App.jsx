import React, { Component } from "react";
import "./App.css";
import {MdCopyright} from 'react-icons/md';
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
import Affiliate from "./components/Affiliate";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import OrderDetails from "./components/OrderDetails";
import ProfileUpdate from "./components/ProfileUpdate";
import ChangePassword from "./components/ChangePassword";
import Wishlist from "./components/Wishlist";
import ProductDetails from "./components/ProductDetails";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid p-0 m-0 mb-5">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/affiliate/:user_id" component={Affiliate} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route path="/orders/summary/:order_id" component={OrderDetails} />
          <Route exact path="/profile" component={ProfileUpdate} />
          <Route exact path="/updatePassword" component={ChangePassword} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route path="/product/single/:id" component={ProductDetails} />

          <Route
            path="/shop/:gender/:category_id"
            render={props => (
              <Products key={props.match.params.category_id} {...props} />
            )}
          />
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
        </div>
        <footer>
            <div className="container-fluid fixed-bottom">
                <div className="row">
                    <p className="text-center mx-auto p-0 m-0">Copyright <MdCopyright/> Shoppe | All rights reserved</p>
                </div>
            </div>
      </footer>        
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
