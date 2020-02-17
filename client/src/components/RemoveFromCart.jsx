import React from "react";
import { useDispatch } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { deleteFromCart } from "../store/cart/actions/cart.actions";
const RemoveFromCart = props => {
  const dispatch = useDispatch();
  return (
    <TiDelete
    style={{fontSize:"2rem", cursor: "pointer"}}
      className="text-danger"
      onClick={e => {
        dispatch(deleteFromCart(props.product));
      }}
    />
  );
};

export default RemoveFromCart;
