

const filterListReducer = (filterList = {
    brands : [],
    colors : [],
    categories : []
}, action) => {
  if (action.type === "CREATE_FILTER_LIST") {

   let brands = [],
     colors = [],
     categories = [];
   action.payload.map(product => {
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
     categories: categories,
   })
   
  }
  
  return filterList;
};

export default filterListReducer;







  