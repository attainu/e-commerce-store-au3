import React from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import ProductTile from "./ProductTile";
import OrderTile from "./OrderTile";
import Authorize from "./Authorize";
const OrderDetails = props => {
  const orders = useSelector(state => state.orders);
  const order_id = props.match.params.order_id;
  let order;

  if (orders) {
    order = orders.filter(order => {
      return order.order_id == order_id;
    });
  }
  return (
    <>
      <Authorize />
      {order ? (
        <div className="container mt-5 p-3 d-flex my-5 justify-content-center align-items-center">
          <div className="row font-weight-bold">
            <div className="col-12">
              <p>Order Details </p>
            </div>
            <div className="container font-weight-bold">
              {order[0].products.map((product, index) => {
                return <OrderTile product={product} index={index} />;
              })}
            </div>
            <div className="col-6 d-flex   justify-content-center align-items-center ">
              <small className="font-weight-bold">
                Order Placed At{" "}
                <span>
                  <Moment format="DD/MM/YYYY HH:mm">{order[0].created}</Moment>
                </span>
              </small>
            </div>
            <div className="col-6 d-flex   justify-content-center align-items-center text-success">
              Order Total : ₹ {order[0].total_price}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OrderDetails;
