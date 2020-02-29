import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GiMale, GiFemale } from "react-icons/gi";
import { handleChange } from "../logic/signupLogic";
const ProfileUpdate = () => {
  const initialErrors = {
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    password: null,
    password2: null
  };

  const [errors, setErrors] = useState(initialErrors);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const { firstname, lastname, email, gender, mobile, address } = isLoggedIn;

  const initialFormValues = {
    firstname,
    lastname,
    email,
    gender,
    mobile,
    address,
    oldpassword: ""
  };

  // const [firstname_, setfirstname] = useState(firstname);
  // const [lastname_, setlastname] = useState(lastname);
  // const [email_, setemail] = useState(email);
  // const [gender_, setgender] = useState(gender);
  // const [mobile_, setmobile] = useState(mobile);
  // const [address_, setaddress] = useState(address);
  // const [oldpassword_, setoldpassword] = useState("");
  // const [newpassword_, setnewpassword] = useState("");
  // const [confirmnewpassword_, setconfirmnewpassword] = useState("");

  const [form, setForm] = useState(initialFormValues);
  const [password, setPassword] = useState("");

  const [editmode, seteditmode] = useState(false);

  const handleChangeHigher = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    handleChange(e, setErrors, errors, setPassword, password);
  };
  const appendError = v => {
    return v ? <small className="text-danger ">{v}</small> : null;
  };
  return (
    <div className="container my-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <form
            className="border p-3 shadow shadow-sm rounded"
            // onSubmit={e => handleSubmit(e)}
          >
            <div className="form-group px-2 d-flex justify-content-between align-items-center">
              <h3 className="">Profile</h3>
              <div class="custom-control custom-switch">
                <input
                  onChange={e => seteditmode(!editmode)}
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitch1"
                />
                <label for="customSwitch1" class="custom-control-label">
                  Edit Mode
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
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={e => handleChangeHigher(e)}
                  checked={form.gender === "male"}
                  required
                  readOnly={!editmode}
                />
                <label class="form-check-label">
                  Male <GiMale />
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={e => handleChangeHigher(e)}
                  checked={form.gender === "female"}
                  required
                  readOnly={!editmode}
                />
                <label class="form-check-label">
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
                readOnly
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
                defaultValue="+91"
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
            <div className="form-group">
              <label>
                Password<span className="text-danger">*</span>
              </label>
              <input
                name="oldpassword"
                type="password"
                className="form-control"
                onChange={e => handleChangeHigher(e)}
                required
                readOnly={!editmode}
              />
            </div>
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
                readOnly={!editmode}
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
                readOnly={!editmode}
              />
              {appendError(errors.password2)}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            {/* /////////////////////MESSAGE WILL GO HERE */}

            {/* {signupResponse.message ? (
              <p
                className={` font-weight-bold mt-3
                 ${signupResponse.error ? "text-danger" : "text-success"}
                `}
              >
                {signupResponse.message}
                {signupResponse.error ? null : <Redirect to="/login" />}
              </p>
            ) : null} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
