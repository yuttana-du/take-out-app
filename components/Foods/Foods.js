import React, { useState } from "react";
import FoodItem from "./FoodItem";

import mock from "../../constant/mock";

const ListFood = () => {
  return (
    <div className="overflow-y-auto">
      {mock.map((menu) => (
        <FoodItem value={menu} />
      ))}
    </div>
  );
};

export default ListFood;
