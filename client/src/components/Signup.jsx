import React, { useState, useEffect } from "react";
import { handleChange, validateForm } from "./logic/signupLogic";
const Signup = props => {
  const initialErrors = {
    name: null,
    email: null,
    contact: null,
    password: null,
    password2: null
  };

  const [errors, setErrors] = useState(initialErrors);
  const [password, setPassword] = useState(null);

  const handleChangeHigher = e => {
    handleChange(e, setErrors, errors, setPassword, password);
  };
  const appendError = v => {
    return v ? <small className="text-danger ">{v}</small> : null;
  };
  useEffect(() => {}, []);

  return (
    <div className="container " style={{ height: "90vh" }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <form className="border p-5 shadow shadow-sm rounded">
            <div className="form-group">
              <h3 className="mb-4">SignUp</h3>
            </div>
            <div className="form-group">
              <label>
                Name<span className="text-danger">*</span>
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                onChange={e => handleChangeHigher(e)}
                required
              />
              {appendError(errors.name)}
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
                Contact<span className="text-danger">*</span>
              </label>
              <input
                name="contact"
                type="text"
                className="form-control"
                defaultValue="+91"
                onChange={e => handleChangeHigher(e)}
                required
              />
              {appendError(errors.contact)}
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

            {/* error message will go here  */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
