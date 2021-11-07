import React, { useState } from "react";
import mock from "../constant/mock";
import Cross from "../public/icons/cross.svg";

const ButtonAddFood = ({ isAdded }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center rounded-timer cursor-pointer bg-${
        isAdded ? "pink" : "RedVermilionBird"
      } min-w-88 w-w88 h-w38 my-w10 leading-A18 tracking-A8`}
    >
      <div
        className={`text-${
          isAdded ? "brow" : "white"
        } font-body text-normal font-bold`}
      >
        {isAdded ? (
          <span className="flex items-center">
            <Cross className="mr-1" /> Added 1
          </span>
        ) : (
          `Add 4.99`
        )}
      </div>
    </div>
  );
};

export default ButtonAddFood;
