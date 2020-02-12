import { fetchCategoriesFn } from "../../api/get";
import { store } from "../../../store";

const categoriesReducer = (categories = [], action) => {
  if (action.type === "FETCH_CATEGORIES") {
    fetchCategoriesFn(store);
  }
  if (action.type === "UPDATE_CATEGORIES") {
    return (categories = action.payload);
  }

  return categories;
};

export default categoriesReducer;
