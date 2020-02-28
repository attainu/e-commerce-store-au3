import { store } from "../../../store";
import { apiFetchOrders } from "../../api/get";

const ordersReducer = (orders = null, action) => {
  if (action.type === "FETCH_ORDERS") {
    const { user_id, token } = action;
    apiFetchOrders(user_id, token, store);
  }
  if (action.type === "UPDATE_ORDERS") {
    return (orders = action.payload);
  }
  if (action.type === "CLEAR_ORDERS") {
    return (orders = null);
  }

  return orders;
};

export default ordersReducer;
