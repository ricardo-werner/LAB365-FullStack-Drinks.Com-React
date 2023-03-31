import React from "react";
import { Order } from "./Order";

export function Orders() {
  return (
    <div className="orders">
      <h2>Últimos pedidos realizados</h2>
      <Order number={9999998} date="30/03/2023" />
      <Order number={9999997} date="11/03/2023" />
    </div>
  );
}
