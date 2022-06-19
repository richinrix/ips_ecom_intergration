import React, { useState, useEffect } from "react";
import { getAllOrders } from "../services/graphcms";
import QRCode from "qrcode.react";
const TrackOrder = () => {
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    getAllOrders().then((orders) => setOrders(orders));
  }, []);
  const orderCard = (order) => {
    return (
      <div
        id={order.orderId}
        className="flex items-center justify-between my-10 shadow-md p-5 rounded-md"
      >
        <div className="h-full flex">
          <div
            class="w-32 h-32 rounded-md bg-cover bg-center bg-no-repeat mr-5"
            style={{
              backgroundImage: `url(${order.productImage})`,
            }}
          />
          <div class="flex flex-col">
            <div>Order ID : {order.orderId}</div>
            <p> Product Cost : {order.productCost}</p>
          </div>
        </div>
        <QRCode id="qrCodeEl" size={150} value={order.orderId} />
      </div>
    );
  };
  return (
    <div className="px-5">
      <div class="w-full text-4xl my-4  text-center">Your Placed Orders</div>
      {console.log(orders)}
      {orders.map((order) => orderCard(order))}
    </div>
  );
};

export default TrackOrder;
