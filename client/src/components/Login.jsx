import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/api/auth";
import { Redirect } from "react-router-dom";

import { fetchCartItems } from "../store/cart/actions/cart.actions";
import { fetchWishListItems } from "../store/wishlist/actions/wishlist.actions";
import { fetchAffiliateDetails } from "../store/affiliateDetails/actions/affiliateDetails.actions";
const Login = props => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value,
      password = e.target.password.value;
    login(email, password, dispatch);
  };

  if (isLoggedIn.success) {
    dispatch(fetchCartItems(isLoggedIn));
    dispatch(fetchWishListItems(isLoggedIn));
    dispatch(fetchAffiliateDetails(isLoggedIn.token, isLoggedIn.user_id));

    return <Redirect to="/" />;
  } else
    return (
      <div className="container " style={{ height: "90vh" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <form
              className="border p-5 shadow shadow-sm rounded"
              onSubmit={e => handleSubmit(e)}
            >
              <div className="form-group">
                <h3 className="mb-4">Login</h3>
              </div>
              <div className="form-group">
                <label>
                  Email<span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="form-group">
                <label>
                  Password<span className="text-danger">*</span>
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                />
                {/* we need to implement this */}
                <small className="text-muted">Forget Password ?</small>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {isLoggedIn.error ? (
                <p className="text-danger font-weight-bold mt-3 mb-0">
                  {isLoggedIn.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
