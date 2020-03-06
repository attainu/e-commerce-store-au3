import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderTile from "./OrderTile";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const token = useSelector(state => state.isLoggedIn.token);
  return (
    <>
      <div className="container mt-5">
        <div className="border p-2 ">
          <h2 className="text-center">
            Wishlist <FaHeart />
          </h2>
        </div>
        <div className="container mt-5">
          {wishlist.length === 0 ? (
            <>
              <h6 className="text-center text-danger">
                Your Wishlist Is empty !!!
              </h6>
              <h5 className="text-center ">Add few Items In It...</h5>
            </>
          ) : (
            wishlist.map((w, index) => {
              return (
                <div className="row" key={index+"abcde"}>
                  <div className="col-12">
                    <OrderTile
                      purpose={"wishlist"}
                      product={w}
                      wishlist={wishlist}
                      product_id={w.product_id}
                      index={index}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
