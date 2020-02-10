import { fetchCategories } from "../api/get";
import { store } from "../../store";

const categoriesReducer = (categories = [], action) => {
  if (action.type === "FETCH_CATEGORIES") {
    // let newColor = [...color];
    // newColor.push(action.payload);
    // return (color = newColor);
    fetchCategories(store);
  }
  if (action.type === "UPDATE_CATEGORIES") {
    return (categories = action.payload);
  }

  return categories;
};

export default categoriesReducer;
