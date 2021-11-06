const Cart = (params) => {
  return (
    <div
      className={`flex flex-row justify-center items-center rounded-timer cursor-pointer bg-RedVermilionBird min-w-335  h-w58 py-5 mt-w35 mb-w39 leading-A18 tracking-A8`}
    >
      <p className={"text-white font-body text-normal font-bold"}>
        View Cart - $14.97
        {/* {checkAdd ? `x Added ${quantity} ` : `Add ${price}`} */}
      </p>
    </div>
  );
};

export default Cart;
