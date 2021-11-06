import React, { useState, useEffect } from "react";

const Quantity = ({ setQuantity, quantity }) => {
  const onAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const onDropQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex flex-row justify-around items-center h-h26 w-w74 py-w7 px-w10 rounded-timer bg-Container">
      <div className="text-font17 h-5 cursor-pointer" onClick={onDropQuantity}>
        -
      </div>
      <div className="text-normal font-bold mx-w15" name="quantity">
        {quantity}
      </div>
      <div className="text-font17 cursor-pointer" onClick={onAddQuantity}>
        +
      </div>
    </div>
  );
};

export default Quantity;
