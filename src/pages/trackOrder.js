import React, { useState, useEffect } from "react";
import { getAllOrders } from "../services/graphcms";
import QRCode from "qrcode.react";
// icons
import { TbBuildingWarehouse, TbMailbox } from "react-icons/tb";
// import { TbMailbox } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";

const TrackOrder = () => {
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    getAllOrders().then((orders) => setOrders(orders));
  }, []);
  const orderCard = (order) => {
    console.log(order);
    const {
      trackingId,
      orderId,
      productName,
      productImage,
      productCost,
      ipsSourcePin,
    } = order;
    console.log(trackingId);
    return (
      <div className="  my-10 neu-shadow p-5 rounded-md">
        <div id={orderId} className="flex items-center justify-between w-full ">
          <div className="h-full flex">
            <div
              class="w-32 h-32 rounded-md bg-cover bg-center bg-no-repeat mr-5"
              style={{
                backgroundImage: `url(${productImage})`,
              }}
            />
            <div class="flex flex-col">
              <div>Order ID : {orderId}</div>
              <div> Product Cost : {productCost}</div>
              <div>Product Name : {productName}</div>
              {trackingId.length > 0 && (
                <div>IPS Tracking ID : {trackingId}</div>
              )}
            </div>
          </div>
          <QRCode id="qrCodeEl" size={150} value={order.orderId} />
        </div>
        {/* status */}
        <div class="w-full flex justify-evenly items-center my-3 ">
          <div className="flex flex-col items-center justify-center">
            <TbBuildingWarehouse className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-3" />
            <div className="text-green-500">Dispatched</div>
          </div>
          <div
            className={`flex flex-col items-center justify-center 
            ${trackingId.length > 0 ? "text-green-500" : "text-gray-500"}
          `}
          >
            <TbMailbox className="w-12 h-12  bg-gray-200 rounded-full p-3" />
            <div
              className={`${
                trackingId.length > 0 ? "text-green-500" : "text-gray-500"
              }`}
            >
              Post Office ({ipsSourcePin})
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BsFillBagCheckFill className="w-12 h-12 text-gray-500 bg-gray-200 rounded-full p-3" />
            <div className="text-gray-500">You</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-5">
      <div class="w-full text-4xl my-4  text-center">Your Placed Orders</div>
      {orders.map((order) => orderCard(order))}
    </div>
  );
};

export default TrackOrder;
