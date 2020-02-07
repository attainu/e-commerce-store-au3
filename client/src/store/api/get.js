import { API_ORIGIN_URL } from "../../config";
console.log(API_ORIGIN_URL);
const fetchProducts = (store) => {
  let url = `${API_ORIGIN_URL}/`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {
      store.dispatch({
        type: "UPDATE_ALL_PRODUCTS",
        payload: data
      });
    });
};

export { fetchProducts };
