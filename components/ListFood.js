import React from "react";
import Food from "./Food";
import mock from "../constant/mock";

const ListFood = () => {
  return (
    <div className="overflow-y-auto">
      {mock.map((menu) => (
        <Food value={menu} />
      ))}
    </div>
  );
};

export default ListFood;
