import React, { useState, useEffect } from "react";
const Login = (props = null) => {
  const initial = null;

  const [isLoggedIn, setisLoggedIn] = useState(initial);

  useEffect(() => {
    setisLoggedIn(props);
    return () => {
      console.log(isLoggedIn);
    };
  }, [props, isLoggedIn]);

  return (
    <div className="container " style={{ height: "90vh" }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <form className="border p-5 shadow shadow-sm rounded">
            <div className="form-group">
              <h3 className="mb-4">Login</h3>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              {/* we need to implement this */}
              <small className="text-muted">Forget Password ?</small>
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

export default Login;
