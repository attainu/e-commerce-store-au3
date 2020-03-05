import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Authorize from "./Authorize";
import CheckoutDetails from "./CheckoutDetails";
import { placeOrder } from "../store/api/post";
import { clearOrderResponse } from "../store/orderResponse/actions/orderResponse.actions";
import { API_ORIGIN_URL } from "../config";
import Animation from './Animation';
import { MdPayment } from "react-icons/md"
import imgBrand from '../assets/shoppe.png';
const Checkout = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const orderResponse = useSelector(state => state.orderResponse);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const products = cart.map(item => {
    const { product_id, qty } = item;
    return {
      product_id,
      qty
    };
  });
  let total_price = cart.reduce((sum, b) => {
    return sum + parseFloat(b.price) * parseFloat(b.qty);
  }, 0);
  
  const [fixTotalPrice] = useState(total_price);
  const [affiliate_name, setAffiliate_name] = useState(null);
  const [affiliate_nameCopy, setAffiliate_nameCopy] = useState(null);
  const [affiliateResponse, setAffiliateResponse] = useState(null);


  total_price =
    affiliateResponse === true
      ? fixTotalPrice - Math.ceil((fixTotalPrice / 100) * 10)
      : total_price;

  const checkAffiliation = () => {
    const url = `${API_ORIGIN_URL}/affiliations/search/${affiliate_name}`;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${isLoggedIn.token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setAffiliateResponse(data);
        setAffiliate_nameCopy("");
      });
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      dispatch(clearOrderResponse());
    };
  }, []);

// RAZORPAY---------------------------------------------
  const options = {
    key: 'rzp_test_zTmrx5AQ7Fucyd',
    amount: total_price*100, 
    name: 'SHOPPE',
    description: 'Have a great day shopping',
    image: imgBrand,
    handler: function(response) {
      placeOrder(
        isLoggedIn,
        dispatch,
        affiliate_name,
        products,
        total_price,
        isLoggedIn.user_id,
        isLoggedIn.token,
      );
    },
    prefill: {
        name: isLoggedIn.firstname+' '+isLoggedIn.lastname,
        contact: isLoggedIn.mobile,
        email: isLoggedIn.email
    },
    notes: {
        address: isLoggedIn.address
    },
    theme: {
        color: 'blue',
        hide_topbar: false
    }
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  if(orderResponse.isLoading){
    return(
      <Animation/>
    )
  }

  else{
    return (
      
      <div className="container-fluid mt-3">
        <Authorize />
          <div className="border p-2 rounded ">
          <h2 className="text-center">Checkout</h2>
        </div>

        <CheckoutDetails cart={cart} />
        {
          cart.length===0?'':

          <div className="container mt-3">
            <div className="row w-100 d-flex  align-items-center justify-content-center">
              <div className="col-9 d-flex  align-items-center">
                <div className="container">
                  <div className="row w-100">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                      <p className="text-success font-weight-bold m-0">                      
                        {affiliateResponse ? (
                          <span>
                            Order Total :
                            <>
                              <span>
                                {total_price} <s>₹{fixTotalPrice}</s>
                              </span>
                            </>
                          </span>
                        ) : (
                          `Order Total : ₹${total_price}`
                        )}
                      </p>
                    </div>
                    <div className="col-6">
                      <div class="input-group">
                        <input
                          value={affiliate_nameCopy}
                          type="text"
                          class="form-control"
                          placeholder="Enter Affiliation Code (optional)"
                          onChange={e => {
                            setAffiliate_name(e.target.value);
                            setAffiliate_nameCopy(e.target.value);
                          }}
                        />

                        <div className="input-group-prepend">
                          <button
                            onClick={e => checkAffiliation()}
                            className="btn btn-success"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                      {affiliateResponse === true ? (
                        <small className="text-success font-weight-bold">
                          Discount Applied of ₹ (
                          {Math.ceil((fixTotalPrice / 100) * 10)}) (10%){" "}
                        </small>
                      ) : null}
                      {affiliateResponse === false ? (
                        <small className="text-danger font-weight-bold">
                          Invalid Affiliation code !!!
                        </small>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <button className={`btn btn-success px-3 ${
                    cart.length === 0 ? "disabled" : ""
                  }`} onClick={openPayModal}><MdPayment/> Pay with Razorpay
                </button>
              </div>
            </div>
            <p className="text-center text-danger py-5"> Use Test Card 5104 0155 5555 5558</p>
          </div>
        }
         
        <div className="row mt-5">
          <div className="col-12">
            {orderResponse.message ? (
              <p
                className={`text-center m-0 font-weight-bold ${
                  !orderResponse.error ? "text-success" : "text-danger"
                }`}
              >
                {orderResponse.message}
              </p>
            ) : null}
          </div>
        </div>

      </div>
    );
  }
};


export default Checkout;
