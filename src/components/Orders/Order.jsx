import React, { useState } from "react";
import { OrderItem } from "./OrderProduct";

export const Order = ({ number, date }) => {
  return (
    <div className="order__container">
      <div className="order__header">
        <h4 className="order__number">{`Pedido número ${number}`}</h4>
        <span className="order__date">{date}</span>
      </div>

      <table className="order__table">
        <thead>
          <tr>
            <th>Num. Pedido</th>
            <th>produto</th>
            <th>preço</th>
            <th>quantidade</th>
          </tr>
        </thead>
        <tbody>
          <OrderItem
            item={{ id: 1, name: "Café Duplo", price: 5, quantity: 1 }}
          />
        </tbody>
      </table>
    </div>
  );
};
