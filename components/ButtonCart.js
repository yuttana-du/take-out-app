import Router from "next/router";
import SymbolCart from "../public/icons/cart.svg";

const Cart = ({ isOpen, cart }) => {
  let countFood = 0;
  let countPrice = 0;

  (() => {
    if (cart.length)
      cart.map((items) => {
        countFood = countFood + items.quantity;
        countPrice = countPrice + items.quantity * items.price;
        return items;
      });
  })();

  const handleClickIndex = () => {
    Router.push({ pathname: "/checkout" });
  };

  return (
    <div
      className={`
      ${
        isOpen ? "flex" : "hidden"
      } flex-row justify-center items-center rounded-timer cursor-pointer bg-RedVermilionBird min-w-335  h-w58 py-5 mt-w35 mb-w39 leading-A18 tracking-A8`}
      onClick={handleClickIndex}
    >
      <h5
        className={
          " flex flex-row justify-center items-center text-white font-body text-font20 font-bold"
        }
      >
        View Cart - ${countPrice.toFixed(2)}{" "}
        <div className="flex flex-row justify-center items-center relative">
          <SymbolCart className="ml-1" />
          <div class="flex flex-row justify-center items-center text-cartNumber rounded-xl font-cart absolute  -top-1 left-6  bg-white font-bold w-w12 h-w12 text-RedVermilionBird">
            {countFood}
          </div>
        </div>
      </h5>
    </div>
  );
};

export default Cart;
