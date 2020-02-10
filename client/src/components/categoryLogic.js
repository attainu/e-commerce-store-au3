const createCategories = (arr, type) => {
  let result = [];
  let len = arr.length;
  if (type === "men") {
    const reference = [1, 2, 3, 4, 5];
    for (let i = 0; i < len; i++) {
      if (reference.includes(arr[i].category_id)) {
        result.push(arr[i]);
      }
    }
  }
  if (type === "women") {
    const reference = [6, 7, 8, 9, 10];
    for (let i = 0; i < len; i++) {
      if (reference.includes(arr[i].category_id)) {
        result.push(arr[i]);
      }
    }
  }

  return result;
};

export { createCategories };
