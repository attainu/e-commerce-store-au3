const categoryFilterReducer = (category = [], action) => {
  if (action.type === "ADD_CATEGORY_FILTER") {
    let newCategory = [...category];
    newCategory.push(action.payload);
    return (category = newCategory);
  }
  if (action.type === "REMOVE_CATEGORY_FILTER") {
    let newCategory = [...category];
    let index = newCategory.indexOf(action.payload);
    newCategory.splice(index, 1);

    return (category = newCategory);
  }
  if (action.type === "CLEAR_CATEGORY_FILTER") {
    return (category = []);
  }

  return category;
};

export default categoryFilterReducer;
