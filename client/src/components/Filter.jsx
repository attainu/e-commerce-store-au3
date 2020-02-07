import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="container text-white d-flex justify-content-center">
        <div className="">
          <h2 className="mb-5 mt-2">Filters</h2>

          <h5>Brands</h5>

          {/* this we need to map  */}
          <div className="m-3">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Nike
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Puma
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Roadster
              </label>
            </div>
          </div>

          <h5>Color</h5>

          {/* this we need to map  */}
          <div className="m-3">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Black
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                White
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Red
              </label>
            </div>
          </div>
          <h5>Range</h5>
          {/* this we need to think   a slider or ranges ??? */}
        </div>
      </div>
    );
  }
}

export default Filter;
