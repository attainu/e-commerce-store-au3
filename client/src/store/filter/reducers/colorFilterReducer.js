const colorFilterReducer = (color = [], action) => {
  if (action.type === "ADD_COLOR_FILTER") {
    let newColor = [...color];
    newColor.push(action.payload);
    return (color = newColor);
  }
  if (action.type === "REMOVE_COLOR_FILTER") {
    let newColor = [...color];
    let index = newColor.indexOf(action.payload);
    newColor.splice(index, 1);

    return (color = newColor);
  }
  if (action.type === "CLEAR_COLOR_FILTER") {
    return (color = []);
  }

  return color;
};

export default colorFilterReducer;
