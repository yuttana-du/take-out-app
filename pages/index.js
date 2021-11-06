import React from "react";
import Header from "../components/Header";
import ListFood from "../components/ListFood";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-start mx-5">
      <Header />
      <ListFood />
      <Cart />
    </div>
  );
};

export default Home;
