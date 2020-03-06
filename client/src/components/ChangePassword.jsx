import React, { useState } from "react";
import { useSelector } from "react-redux";
import { handleChange } from "../logic/signupLogic";
import { updatePassword } from "../store/api/auth";
import LinearDotsSpinner from "./LinearDotsSpinner";
import Authorize from "./Authorize";

const ChangePassword = () => {
  const token = useSelector(state => state.isLoggedIn.token);

  const initialErrors = {
    password: null,
    password2: null
  };

  const initialFormValues = {
    password: ""
  };

  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState(initialErrors);
  const [form, setForm] = useState(initialFormValues);
  const [response, setResponse] = useState(null);
  const handleChangeHigher = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    handleChange(e, setErrors, errors, setPassword, password);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResponse("waiting");
    updatePassword({ password: e.target.password.value }, setResponse, token);
  };
  const appendError = v => {
    return v ? <small className="text-danger ">{v}</small> : null;
  };
  return (
    <div className="container mt-5 ">
      <Authorize />
      <div className="row mt-5 d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <form
            className="border p-5 shadow shadow-sm rounded"
            onSubmit={e => handleSubmit(e)}
          >
            <div className="form-group px-2 d-flex justify-content-between align-items-center">
              <h3 className="">Change Password</h3>
            </div>
            <hr />
            <div className="form-group">
              <label>
                New Password<span className="text-danger">*</span>
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

            {response && response.message ? (
              <p
                className={` font-weight-bold mt-3
                 ${response.error ? "text-danger" : "text-success"}
                `}
              >
                {response.message}
              </p>
            ) : null}
            {response === "waiting" ? <LinearDotsSpinner /> : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
