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

export const getTotal = cartArr => {
  let total = 0;

  cartArr.forEach(element => {
    total = total + element.price * element.qty;
  });

  return total;
};