import React from "react";
import { useDispatch } from "react-redux";
import AddToWishlist from "./AddToWishlist";

const WishlistDropdown = props => {
  // we get wishlist array in props
  const dispatch = useDispatch();
  if (props.wishlist.length > 0) {
    return (
      <>
        {props.wishlist.map((item, index) => {
          return (
            <div className="dropdown-item my-0 py-3" key={index + 43537}>
              <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <h6 className="text-center">
                    {/* itemTile will go here */}

                    {item}
                  </h6>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <AddToWishlist
                    key={index + 64564}
                    product_id={item}
                    wishlist={props.wishlist}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <p
          className="font-weight-bold text-danger text-center py-3"
          style={{ cursor: "pointer" }}
        >
          Clear Wishlist
        </p>
      </>
    );
  } else {
    return (
      <p className="text-center text-danger m-0 py-3">Wishlist is empty !!!</p>
    );
  }
};

export default WishlistDropdown;
