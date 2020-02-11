import React from "react";

function Login(props) {
  return (
    <div className="container " style={{ height: "90vh" }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <form className="w-75  p-5 shadow shadow-sm rounded">
            <h3 className="mb-5 text-center">LOGIN</h3>
            <div class="form-group">
              <label for="exampleInputEmail1">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
