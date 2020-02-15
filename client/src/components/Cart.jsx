import React from "react";
import ProductTile from "./ProductTile";
const Cart = props => {
  console.log(props.cartArr, props.wishlist, props.products);

  return (
    <div className="container-fluid">
      <div className="row">
        {props.cartArr.map(item => {
        return props.products.map(product => {
          if (item.product_id === product.product_id) {
            return (
              <ProductTile
                key={product.product_id}
                product={product}
                cart={props.cartArr}
                wishlist={props.wishlist}
              />
            );
          }
        });  
          })
        }
      </div>
    </div>
  );
};
export default Cart;
