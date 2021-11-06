import React, { useState } from "react";
import mock from "../constant/mock";

const ButtonAddFood = ({ checkAdd, onClick, quantity, price }) => {
  // console.log(checkAdd);

  return (
    <div
      className={`flex flex-row justify-center items-center rounded-timer cursor-pointer bg-${
        checkAdd ? "pink" : "RedVermilionBird"
      } min-w-88 w-w88 h-w38 my-w10 leading-A18 tracking-A8`}
      onClick={onClick}
    >
      <p
        className={`text-${
          checkAdd ? "brow" : "white"
        } font-body text-normal font-bold`}
      >
        {checkAdd ? `x Added ${quantity} ` : `Add ${price}`}
      </p>
    </div>
  );
};

export default ButtonAddFood;
