import React, { useState, useEffect } from "react";

const Quantity = () => {
  return (
    <div className="flex flex-row justify-around items-center h-h26 w-w74 py-w7 px-w10 rounded-timer bg-Container">
      <div className="text-font17 h-5 cursor-pointer">-</div>
      <div className="text-normal font-bold mx-w15" name="quantity">
        1
      </div>
      <div className="text-font17 cursor-pointer">+</div>
    </div>
  );
};

export default Quantity;
