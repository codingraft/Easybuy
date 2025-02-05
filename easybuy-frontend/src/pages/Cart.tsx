import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";

const cartItems = [
  {
    productId: "1",
    name: "Puma Shoes",
    image: "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg",
    price: 2000,
    quantity: 2,
    stock: 10,
  },
  
];
const subtotal = 0;
const shipping = 200;
const tax = Math.round(subtotal * 0.18);
const discount = 0;
const total = subtotal + shipping + tax;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [validCoupon, setvalidCoupon] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (Math.random() > 0.5) setvalidCoupon(true);
      else setvalidCoupon(false);
    }, 1000);

    return () => {
      clearTimeout(id);
      setvalidCoupon(false);
    };
  }, [coupon]);

  return (
    <div className="container cart flex justify-between items-start lg:flex-row sm:flex-col gap-10 lg:h-screen sm:h-full p-20">
      <main className="cart_main lg:w-3/5 sm:w-full">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))
        ) : (
          <h1>Cart is empty</h1>
        )}
      </main>
      <aside className="cart_sidebar bg-white flex-1 sm:w-full border border-slate-200 p-10 rounded">
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping: ₹{shipping}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em>- ₹{discount}</em>{" "}
        </p>
        <p>
          {" "}
          <b>Total: ₹{total}</b>{" "}
        </p>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon code"
          className="border border-gray-300 px-2 py-2 rounded text-sm w-full mb-5 "
        />
        {coupon &&
          (validCoupon ? (
            <p className="text-green-600 flex gap-2 items-center">
              Discount ₹{discount} Applied using <code>{coupon}</code>
            </p>
          ) : (
            <p className="text-red-600 flex gap-2 items-center">
              <VscError /> Invalid Coupon{" "}
            </p>
          ))}
        <button className="button bg-black text-white w-full p-2 rounded">
          CHECKOUT
        </button>
      </aside>
    </div>
  );
};
export default Cart;
