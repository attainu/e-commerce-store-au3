import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../logic/signupLogic";
import { GiMale, GiFemale } from "react-icons/gi";
import { signup } from "../store/api/auth";
import { Redirect, Link } from "react-router-dom";

const Signup = props => {
  const initialErrors = {
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    password: null,
    password2: null
  };

  const [errors, setErrors] = useState(initialErrors);
  const [password, setPassword] = useState(null);
  const signupResponse = useSelector(state => state.signupResponse);
  const dispatch = useDispatch();
  const handleChangeHigher = e => {
    handleChange(e, setErrors, errors, setPassword, password);
  };
  const appendError = v => {
    return v ? <small className="text-danger ">{v}</small> : null;
  };

  const handleSubmit = e => {
    e.preventDefault();
    let form = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      gender: e.target.gender.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      address: e.target.address.value,
      password: e.target.password.value
    };
    signup(form, dispatch);
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <form
            className="border p-5 shadow shadow-sm rounded"
            onSubmit={e => handleSubmit(e)}
          >
            <div className="form-group">
              <h3 className="mb-4">SignUp</h3>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    name="firstname"
                    type="text"
                    className="form-control"
                    onChange={e => handleChangeHigher(e)}
                    required
                  />
                  {appendError(errors.firstname)}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    name="lastname"
                    type="text"
                    className="form-control"
                    onChange={e => handleChangeHigher(e)}
                    required
                  />
                  {appendError(errors.lastname)}
                </div>
              </div>
            </div>
            <div className="form-group d-flex align-items-center">
              <label className="mr-3 mb-0">
                Gender<span className="text-danger">*</span>
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  required
                />
                <label className="form-check-label">
                  Male <GiMale />
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  required
                />
                <label className="form-check-label">
                  Female <GiFemale />
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>
                Email<span className="text-danger">*</span>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                onChange={e => handleChangeHigher(e)}
                required
              />
              {appendError(errors.email)}
            </div>
            <div className="form-group">
              <label>
                Mobile<span className="text-danger">*</span>
              </label>
              <input
                name="mobile"
                type="text"
                className="form-control"
                defaultValue="+91"
                onChange={e => handleChangeHigher(e)}
                required
              />
              {appendError(errors.mobile)}
            </div>
            <div className="form-group">
              <label>
                Address<span className="text-danger">*</span>
              </label>
              <textarea
                name="address"
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>
                Password<span className="text-danger">*</span>
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                onChange={e => handleChangeHigher(e)}
                required
              />
              {appendError(errors.password)}
            </div>
            <div className="form-group">
              <label>
                Confirm Password<span className="text-danger">*</span>
              </label>
              <input
                name="password2"
                type="password"
                className="form-control"
                onChange={e => handleChangeHigher(e)}
                required
              />
              {appendError(errors.password2)}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {signupResponse.message ? (
              <p
                className={` font-weight-bold mt-3
                 ${signupResponse.error ? "text-danger" : "text-success"}
                `}
              >
                {signupResponse.message}
                {signupResponse.error ? null : <Redirect to="/login" />}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
