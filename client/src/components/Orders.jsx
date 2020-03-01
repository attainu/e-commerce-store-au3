import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { fetchOrders } from "../store/orders/actions/orders.actions";
import Authorize from "./Authorize";
import Animation from "./Animation";
const Orders = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders(isLoggedIn));
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Authorize />
      <div className="container-fluid mt-3">
        <div className="border p-2 rounded ">
          <h2 className="text-center">
            Orders <FaBoxOpen />
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {orders ? (
              orders.map((order, index) => {
                return (
                  <div
                    className="col-12 alert alert-success rounded mt-3 py-3 font-weight-bold"
                    key={index + 392}
                  >
                    <div className="row">
                      <div className="col-1 d-flex justify-content-center align-items-center">
                        {index + 1}
                      </div>
                      <div className="col-4 d-flex justify-content-center align-items-center">
                        <Moment format="DD/MM/YYYY HH:mm">
                          {order.created}
                        </Moment>
                      </div>
                      <div className="col-3 d-flex justify-content-center align-items-center">
                        ₹{order.total_price}
                      </div>
                      <div className="col-3 d-flex justify-content-center align-items-center cursor-pointer">
                        <Link to={`orders/summary/${order.order_id}`}>
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <Animation />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
