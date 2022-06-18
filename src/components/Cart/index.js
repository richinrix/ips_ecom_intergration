import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  CardContainerLeft,
  CardContainerRight,
  CartContainer,
  CartProduct,
  CartProductCross,
  CartProductLeft,
  CartProductRight,
  EmptyCart,
  ProductImage,
} from "./CartElements";
import { price, validPIN } from "../../services/priceFinder";
import { getOrders, postOrder } from "../../services/graphcms";
import { BFS, nearestPIN } from "../../services/path_maker";
// input address
const sourcePIN = "700158";
const Cart = (props) => {
  const [showAddress, setShowAddress] = useState(false);
  var total = 0;
  var items = 0;
  const [address, setAddress] = useState("");
  const [PIN, setPIN] = useState(null);
  const [available, setAvailable] = useState();
  const [showPostalCost, setShowPostalCost] = useState(false);
  const [postalCharge, setPostalCharge] = useState();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [invalidPIN, setInvalidPIN] = useState(false);
  const [nearestAvailablePIN, setNearestAvailablePIN] = useState();
  // console.log("Props:", props);
  // {props.productsInComponent? }
  const product = props.productsInComponent[0] && props.productsInComponent[0];
  let unavailablePIN =
    props.productsInComponent[0] && props.productsInComponent[0].unavailable;

  const checkAvailabillity = () => {
    // ! 326001
    let pin = parseInt((PIN + "").slice(0, 3));
    if (validPIN(PIN)) {
      console.log("pin valid");
      console.log("delivery available: ", !unavailablePIN.includes(pin));
      setInvalidPIN(false);
      setAvailable(!unavailablePIN.includes(pin));
    } else {
      console.log("invalid PIN");
      setInvalidPIN(true);
      setAvailable(false);
    }
  };
  const placeOrderIPS = () => {
    // hardcoded for now
    let productSourcePIN = 700158;
    let postalCharge = price(parseInt(PIN), 700158);
    setPostalCharge(postalCharge);
    setShowPostalCost(true);
  };
  const confirmOrder = async () => {
    // const result = await getOrders();
    // console.log(result);

    // * finding nearest path
    let pin = parseInt((PIN + "").slice(0, 2));
    let srcPIN = parseInt((sourcePIN + "").slice(0, 2));
    let path = BFS(srcPIN, pin);
    setNearestAvailablePIN(nearestPIN(path, unavailablePIN));
    console.log(path);
    console.log(nearestPIN(path, unavailablePIN));
    const nearest = nearestPIN(path, unavailablePIN);
    // * posting order data into graphcms
    let uid =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    const details = {
      orderId: uid,
      postageCost: postalCharge.total + "",
      productCost: product.price + "",
      eComDestination: nearestAvailablePIN,
      postOfficeDestination: nearest + "",
    };
    console.log("post details", details);
    const postresult = await postOrder(details);
    console.log(postresult);

    // * setting orderPlaced to true
    setOrderPlaced(true);
    setShowAddress(false);
    setShowPostalCost(false);
    setAvailable(false);
  };
  const inputAddress = () => {
    return (
      <form className="w-1/2 mx-auto my-5 px-3 flex flex-col justify-center  border-2 border-gray-300 rounded-lg ">
        <div className=" my-3 text-xl text-center  w-full  font-semibold ">
          Enter your Address
        </div>
        <div class="w-full flex items-center  ">
          <div class="w-1/2 text-base ">Full Name</div>
          <input
            pattern="[a-zA-Z ]*"
            required
            className="w-full  px-3 py-2 mb-3 text-left  text-gray-700 border border-gray-300 rounded-lg"
            type="text"
          />
        </div>
        <div class="w-full flex items-center  ">
          <div class="w-1/2 text-base ">Enter your PIN</div>
          <input
            pattern="[0-9]*"
            required
            onChange={(e) => setPIN(e.target.value)}
            className="w-full tracking-widest px-3 py-2 mb-3 text-center  text-gray-700 border border-gray-300 rounded-lg"
            type="text"
          />
        </div>
        <div class="w-full flex items-center ">
          <div class="w-1/2 text-base ">Enter your Complete Address</div>
          <textarea
            pattern="[a-zA-Z0-9]*"
            required
            rows={3}
            className="w-full px-3 py-2 mb-3 text-left  text-gray-700 border border-gray-300 rounded-lg"
            type="text"
          />
        </div>
        <div class="w-full flex items-center ">
          <div class="w-1/2 text-base ">City</div>
          <input
            pattern="[a-zA-Z]*"
            required
            className="w-full px-3 py-2 mb-3 text-left  text-gray-700 border border-gray-300 rounded-lg"
            type="text"
          />
        </div>
        <div class="w-full flex items-center ">
          <div class="text-base  w-1/2 ">State</div>
          <input
            pattern="[a-zA-Z]*"
            required
            className="w-full px-3 py-2 mb-3 text-left  text-gray-700 border border-gray-300 rounded-lg"
            type="text"
          />
        </div>
        <div
          className="w-full text-center cursor-pointer text-xl px-3 py-2 mb-3 text-white bg-gray-700 border border-gray-300 rounded-lg"
          onClick={() => checkAvailabillity()}
        >
          Check Availability
        </div>
        {invalidPIN && !orderPlaced ? (
          <div class=" font-semibold py-1 rounded-md my-2 px-3 bg-red-500 text-white  w-full text-center  text-sm ">
            Invalid Pin
          </div>
        ) : null}
      </form>
    );
  };
  const IPSIntegration = () => {
    return (
      <div className="w-1/2 mx-auto my-5 p-3 flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg ">
        <div className="text-red-500 text-lg text-center w-full">
          Direct Delivery to this PIN is not available
        </div>
        <div className="w-full flex items-center ">
          <div className="text-lg text-left ">
            Would you like to order with integration of IPS?
          </div>
          <div className="text-xs text-gray-800 ml-5">
            (additional charges are applied)
          </div>
        </div>
        <div
          onClick={() => placeOrderIPS()}
          className="cursor-pointer bg-orange-500 px-4 py-2 rounded-md my-5 text-white uppercase text-xl"
        >
          Place Order with IPS
        </div>
      </div>
    );
  };
  const postalCost = () => {
    const { postage_amount, tax, door_delivery_charge, total } = postalCharge;
    let { price } = product;
    price = parseInt(price.slice(4));
    return (
      <div className="w-1/2 mx-auto my-5 p-3 flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg">
        <div class="w-full flex flex-col items-center justify-center">
          <div class="text-center w-full font-semibold text-2xl mb-3">
            Postage and Delivery Charge
          </div>
          <div class=" border-b-2 border-gray-200 py-3 w-full flex justify-between">
            <div class="text-base">Total Product Price</div>
            <div class="text-base">Rs. {price}</div>
          </div>
          <div class=" border-b-2 border-gray-200 py-3 w-full flex justify-between">
            <div class="text-base">Postal Amount</div>
            <div class="text-base">Rs. {postage_amount}</div>
          </div>
          <div class=" border-b-2 border-gray-200 py-3 w-full flex justify-between">
            <div class="text-base">Tax</div>
            <div class="text-base">Rs. {tax}</div>
          </div>
          <div class=" border-b-2 border-gray-200 py-3 w-full flex justify-between">
            <div class="text-base">Door Delivery Charge</div>
            <div class="text-base">Rs. {door_delivery_charge}</div>
          </div>
          <div class=" border-b-2 border-gray-200 py-3 w-full flex justify-between">
            <div class="text-base">Total Additonal Cost</div>
            <div class="text-base">Rs. {total}</div>
          </div>

          <div class="  py-3 text-orange-700 text-xl w-full flex justify-between">
            <div class="">Overall Cost </div>
            <div class="">Rs. {total + price}</div>
          </div>
        </div>
        <div
          onClick={() => confirmOrder()}
          class="mx-auto bg-orange-400 rounded-md px-5 cursor-pointer py-1 text-white text-2xl text-center"
        >
          Confirm And Pay
        </div>
      </div>
    );
  };
  return (
    <div>
      {props.productsInComponent.length > 0 ? (
        <>
          {/* <h1>Cart is here: {props.productsInComponent}</h1> */}
          {/* imgUrl, brandName, description, size, price */}
          <CartContainer>
            <CardContainerLeft>
              {props.productsInComponent.map((product) => {
                total += Number(product?.price.slice(4));
                items += 1;
                return (
                  <CartProduct>
                    <CartProductLeft>
                      <ProductImage
                        src={product?.imgUrl}
                        alt="Product Image"
                      ></ProductImage>
                    </CartProductLeft>
                    <CartProductRight>
                      <h4>{product?.brandName}</h4>
                      <p>{product?.description}</p>
                      <p>Sold By Abhiram Satpute</p>
                      <p>{product?.size}</p>
                      <p>{product?.price}</p>
                    </CartProductRight>
                    {/* <CartProductCross onClick={() => alert("Coming Soon!")} /> */}
                  </CartProduct>
                );
              })}
            </CardContainerLeft>
            <CardContainerRight>
              <h4 className="text-red-800">Price Details ({items} items)</h4>
              <p>Total MRP: Rs. {total}</p>
              <h3>Total Amount: Rs. {total}</h3>
              <button
                className="text-red-500"
                onClick={() => setShowAddress(true)}
              >
                PLACE ORDER
              </button>
            </CardContainerRight>
          </CartContainer>
        </>
      ) : (
        <>
          <EmptyCart>
            <h1>Your Cart is Empty! Pack Something!</h1>
          </EmptyCart>
        </>
      )}
      {showAddress && !orderPlaced ? inputAddress() : null}

      {available && !orderPlaced ? (
        <div className="text-red-500 w-full text-center text-lg">
          <h1>Available</h1>
        </div>
      ) : available === false && !showPostalCost ? (
        IPSIntegration()
      ) : null}
      {showPostalCost && !orderPlaced ? postalCost() : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsInComponent: state.cartReducer.productsInCart,
  };
};

export default connect(mapStateToProps)(Cart);

// return (
//   <>
//     {/* <h1>Cart is here: {props.productsInComponent}</h1> */}
//     {/* imgUrl, brandName, description, size, price */}
//     <CartContainer>
//       <CardContainerLeft>
//         {props.productsInComponent.map((product) => {
//           return (
//             <CartProduct>
//               <CartProductLeft>
//                 <ProductImage src="https://www.soccerbible.com/media/19123/adidas-messi-10-10-img1.jpg"></ProductImage>
//               </CartProductLeft>
//               <CartProductRight>
//                 <h4>{product?.brandName}</h4>
//                 <p>{product?.description}</p>
//                 <p>Sold By Me</p>
//                 <p>{product?.size}</p>
//                 <p>{product?.price}</p>
//               </CartProductRight>
//               <CartProductCross />
//             </CartProduct>
//           );
//         })}
//       </CardContainerLeft>
//       <CardContainerRight>
//         <h4>Price Details (x items)</h4>
//         <p>Total MRP: Price</p>
//         <h3>Total Amount: Amount</h3>
//         <button onClick={() => alert("Order Placed!")}>PLACE ORDER</button>
//       </CardContainerRight>
//     </CartContainer>
//   </>
// );
