const applyFilters = (filterArr, filteredProducts, products) => {
  const target = filteredProducts.length > 0 ? filteredProducts : products;
  let filtered = [];
  target.map(product => {
    if (filterArr.indexOf(product.brand) >= 0) {
      filtered.push(product);
    }
    return null;
  });
  return filtered;
};

export { applyFilters };
