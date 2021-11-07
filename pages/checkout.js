import react, { useState } from "react";
import Router from "next/router";

import Order from "../components/Order/Order";
import Summary from "../components/Summary";

import Arrow from "../public/icons/leftarrow.svg";
import Add from "../public/icons/add.svg";

const CheckOut = () => {
  const [mock, setMock] = useState([
    {
      id: "1",
      name: "California Roll",
      description: "crab & cucumber",
      price: 4.99,
      quantity: 2,
    },
    {
      id: "2",
      name: "Tuna Roll",
      description: "tuna & cucumber",
      price: 4.99,
      quantity: 2,
    },
    {
      id: "3",
      name: "Salmon Roll",
      description: "salmon & cucumber",
      price: 4.99,
      quantity: 3,
    },
  ]);

  const handleClickIndex = () => {
    Router.push({ pathname: "/" });
  };

  return (
    <div className="h-screen flex flex-col justify-start font-body leading-A18 tracking-A8 mt-10">
      <div className="flex flex-row  justify-between items-center mx-5  ">
        <div className="cursor-pointer">
          <Arrow />
        </div>
        <h5 className=" text-font20 text-DeepGrey ">Express Cart</h5>
        <div className=""></div>
      </div>
      <hr className="mt-w15 mb-w38   mx-0" />
      <div className="mx-5">
        <div className="flex flex-row justify-between items-end mb-w5">
          <h5 className="text-font20 text-BlackTortoise font-medium">
            Your Order
          </h5>
          <div
            className="flex flex-row justify-end items-end text-text-sm text-RedVermilionBird font-semibold cursor-pointer"
            onClick={handleClickIndex}
          >
            Add items
            <div className="ml-1 relative mr-2.5">
              <Add className="absolute bottom-1" />
            </div>
          </div>
        </div>
        <div>
          <Order value={mock} />
          <Summary value={mock} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
