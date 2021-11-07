import React, { useState } from "react";
import Header from "../components/Header";
import Foods from "../components/Foods/Foods";
import ButtonCart from "../components/ButtonCart";

const Home = () => {
  const [leftTime, setLeftTime] = useState(300);

  return (
    <div className="h-screen flex flex-col justify-start mx-5">
      <Header />
      <Foods />
      <ButtonCart />
    </div>
  );
};

export default Home;
