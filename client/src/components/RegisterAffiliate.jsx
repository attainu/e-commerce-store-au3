import React, { useState } from "react";
import { API_ORIGIN_URL } from "../config";

const RegisterAffiliate = ({user_id}) => {
  const [response, setResponse] = useState(null);
  const handleRegister = e => {
    e.preventDefault();
    let formData = {
      affiliate_name: e.target.affiliate_name.value,
      user_id: user_id
    };
    const url = `${API_ORIGIN_URL}/affiliations`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(data => data.json())
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form className="p-4 border shadow-sm" onSubmit={e => handleRegister(e)}>
        <h4>Genarete Key</h4>
        <hr />
        <div class="form-group">
          <label for="exampleInputPassword1">Affiliate Key</label>
          <input
            type="text"
            class="form-control"
            placeholder="Generate unique Key"
            name="affiliate_name"
          />
          {response ? (
            <small className={response.error ? "text-danger" : "text-success"}>
              {response.message}
            </small>
          ) : null}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterAffiliate;