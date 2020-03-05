import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiMale, GiFemale } from "react-icons/gi";
import { handleChange } from "../logic/signupLogic";
import { updateProfile } from "../store/api/auth";
import LinearDotsSpinner from "./LinearDotsSpinner";
import Authorize from "./Authorize";

const ProfileUpdate = () => {
  const initialErrors = {
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    password: null,
    password2: null
  };
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(initialErrors);
  const [response, setResponse] = useState(null);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const { firstname, lastname, email, gender, mobile, address } = isLoggedIn;

  const initialFormValues = {
    firstname,
    lastname,
    email,
    gender,
    mobile,
    address
  };
  const [form, setForm] = useState(initialFormValues);
  const [editmode, seteditmode] = useState(false);

  const handleChangeHigher = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    handleChange(e, setErrors, errors);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResponse("waiting");
    updateProfile(form, setResponse, isLoggedIn.token, dispatch);
  };

  const appendError = v => {
    return v ? <small className="text-danger ">{v}</small> : null;
  };
  return (
    <div className="container my-3">
      <Authorize />
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <form
            className="border p-3 shadow shadow-sm rounded"
            onSubmit={e => handleSubmit(e)}
          >
            <div className="form-group px-2 d-flex justify-content-between align-items-center">
              <h3 className="">Profile</h3>
              <div className="custom-control custom-switch">
                <input
                  onChange={e => seteditmode(!editmode)}
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                />
                <label htmlFor="customSwitch1" className="custom-control-label">
                  <small
                    className={!editmode ? "text-muted" : "font-weight-bold"}
                  >
                    Edit
                  </small>
                </label>
              </div>
            </div>
            <hr />

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
                    value={form.firstname}
                    onChange={e => handleChangeHigher(e)}
                    required
                    readOnly={!editmode}
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
                    value={form.lastname}
                    className="form-control"
                    onChange={e => handleChangeHigher(e)}
                    required
                    readOnly={!editmode}
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
                  onChange={e => handleChangeHigher(e)}
                  checked={form.gender === "male"}
                  required
                  readOnly={!editmode}
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
                  onChange={e => handleChangeHigher(e)}
                  checked={form.gender === "female"}
                  required
                  readOnly={!editmode}
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
                value={form.email}
                className="form-control"
                onChange={e => handleChangeHigher(e)}
                readOnly
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
                value={form.mobile}
                className="form-control"
                onChange={e => handleChangeHigher(e)}
                required
                readOnly={!editmode}
              />
              {appendError(errors.mobile)}
            </div>
            <div className="form-group">
              <label>
                Address<span className="text-danger">*</span>
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={e => handleChangeHigher(e)}
                type="text"
                className="form-control"
                required
                readOnly={!editmode}
              />
            </div>

            <button
              type="submit"
              disabled={!editmode}
              className="btn btn-primary"
            >
              Submit
            </button>

            {/* /////////////////////MESSAGE WILL GO HERE */}
            {response === "waiting" ? <LinearDotsSpinner /> : null}
            {response && response.message ? (
              <p
                className={` font-weight-bold mt-3
      ${response.error ? "text-danger" : "text-success"}
     `}
              >
                {response.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
