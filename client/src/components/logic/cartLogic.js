export const checkInCart = (product_id, cart) => {
  let result = cart.map((item) => {
    if (item.product_id === product_id) {
      return [true, item.qty];
    }
    return false;
  });
  return result;
};
