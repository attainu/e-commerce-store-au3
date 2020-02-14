export const checkInCart = (product_id, cart) => {
  let r = [false, { product_id: null, qty: null }];

  let result = cart.map(item => {
    if (item.product_id === product_id) {
      r = [true, item];
    }
    return false;
  });
  return r;
};
