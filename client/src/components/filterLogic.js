const applyFilters = (products, brandFilter=[], colorFilter=[]) => {
  let filtered=[]
  let len = products.length;
  let brandProducts = [], colorProducts=[];
  let brandLen = brandFilter.length;
  let colorLen = colorFilter.length;
  if(brandLen>0){
    for(let i=0;i<len;i++)
      if(brandFilter.includes(products[i].brand))
          brandProducts.push(products[i]);
  }
  if(colorLen > 0){
    for(let i=0;i<len;i++)
      if(colorFilter.includes(products[i].color))
          colorProducts.push(products[i]);
  }
  
  let allProducts = colorProducts.concat(brandProducts);
  if(brandLen > 0 && colorLen > 0){
      for(let i=0;i<allProducts.length;i++){
          if(brandFilter.includes(allProducts[i].brand) && colorFilter.includes(allProducts[i].color))
              filtered.push(allProducts[i]);
      }
  }    
  return filtered.length>0? filtered : brandProducts.length>0?brandProducts:colorProducts.length>0?colorProducts:products;
}

export { applyFilters };
