const filterListReducer = (
  filterList = {
    brands: [],
    colors: [],
    categories: []
  },
  action
) => {
  if (action.type === "CREATE_FILTER_LIST") {
    let brands = [],
      colors = [],
      categories = [];
    action.payload.forEach(product => {
      brands.push(product.brand);
      colors.push(product.color);
      categories.push(product.cat_id);
    });

    let Ubrands = new Set(brands);
    let Ucolors = new Set(colors);
    let Ucategories = new Set(categories);

    brands = Array.from(Ubrands);
    colors = Array.from(Ucolors);
    categories = Array.from(Ucategories);

    return (filterList = {
      brands: brands,
      colors: colors,
      categories: categories
    });
  }
  if (action.type === "CLEAR_FILTER_LIST") {
    return (filterList = {
      brands: [],
      colors: [],
      categories: []
    });
  }

  return filterList;
};

export default filterListReducer;
