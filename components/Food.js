import React, { useState } from "react";

import Quantity from "./Quantity";
import mock from "../constant/mock";
import ButtonAddFood from "./ButtonAddFood";

const Food = ({ value }) => {
  const [add, setAdd] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const onClickAdd = () => {
    setAdd(!add);
  };

  return (
    <div className="flex flex-row justify-between items-center  h-20 my-w15">
      <div className="flex flex-row items-center">
        <div
          className={`h-20 w-20 bg-no-repeat bg-right bg-${value.picture} bg-Container rounded-timer mr-w22`}
        ></div>
        <div className="flex flex-col font-body leading-A18 tracking-A8">
          <p className=" text-normal font-medium text-BlackTortoise mb-w5">
            {value.name}
          </p>
          <span className=" text-about text-DeepGrey mb-2">
            {value.description}
          </span>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
      <ButtonAddFood
        onClick={onClickAdd}
        checkAdd={add}
        quantity={quantity}
        price={value.price}
      />
    </div>
  );
};

export default Food;
