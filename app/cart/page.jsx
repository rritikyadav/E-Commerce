"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cartpage() {
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    const get_Cart = JSON.parse(localStorage.getItem("cart"));
    setCart(get_Cart);
  }, []);

  if (!Cart) {
    return (
      <div className="w-[70%] h-[50vh] m-auto bg-white mt-5 flex flex-col gap-5 items-center justify-center">
        <Image src="/cart.svg" alt="cart" width={100} height={100}></Image>
        <p>Your Cart Is Empty . Add Items Now ...</p>
        <Link href="/">
          <button className="bg-red-900 py-2 px-15 rounded-md text-white cursor-pointer">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }

  const handleQuantity = (index, value) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: value } : item
      )
    );
  };

  const hanldeIncreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const handleRemove = (idx) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.splice(idx, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  const totalPrice = Cart.reduce((sum, item) => sum + Math.round(item.price * 100) * item.quantity, 0) / 100;
  const totalItems = Cart.length;
  const discount = 30.19;
  const platFormFee = 10;
  const totalSaved = discount - platFormFee;
  const totalAmount = totalPrice - discount + platFormFee;

  return (
    <>
      <div className="w-[80%] h-[calc(100vh-12vh)] flex gap-4 m-auto mt-[3vh]">
        <div className="w-[70%] bg-white h-full">
          <div className="overflow-hidden h-[calc(100%-12vh)] overflow-y-auto flex flex-col gap-15 px-5 py-8 box-border scroll-smooth snap-y">
            {Cart.map((item, index) => (
              <div key={index} className="grid grid-cols-10 snap-start ">
                <Image
                  className="col-span-2"
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <div className="mt-5 col-span-5">
                  <p className="line-clamp-1">{item.title}</p>
                  <p className="line-clamp-1 text-gray-400">
                    {item.description}
                  </p>
                  <p className="font-bold text-md mt-5">₹ {item.price}</p>
                </div>
                <div className="mt-5 ml-10 text-sm col-span-3">
                  {" "}
                  Delivery By Mon 8sep{" "}
                </div>

                <div className="col-span-10 mt-5 flex justify-between">
                  <span className="flex gap-2 items-center">
                    <button
                      onClick={() => handleDecreaseQuantity(index)}
                      className="w-[30px] h-[30px] rounded-full shadow-md bg-gray-100 text-center font-bold "
                    >
                      -
                    </button>
                    <input
                      onChange={(e) => handleQuantity(index, e.target.value)}
                      className="w-[3vw] h-[3.5vh] border text-center font-bold"
                      type="number"
                      value={item.quantity}
                      onKeyDown={(e) => {
                        if (["e", "E", "+", "-"].includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                    <button
                      onClick={() => {
                        hanldeIncreaseQuantity(index);
                      }}
                      className="w-[30px] h-[30px] rounded-full shadow-md bg-gray-100 text-center font-bold "
                    >
                      +
                    </button>
                  </span>
                  <span
                    onClick={() => {
                      handleRemove(index);
                    }}
                    className="font-bold cursor-pointer text-xl hover:text-red-900"
                  >
                    Remove
                  </span>
                </div>

                <div className=" col-span-10 w-full h-[0.1vh] rounded-full bg-black opacity-10 mt-5"></div>
              </div>
            ))}
          </div>

          <div className=" sticky bottom-0 z-1000 w-full h-[12vh] shadow-[0_-4px_6px_rgba(0,0,0,0.1)] bg-white flex justify-between items-center">
            <p className="ml-5 font-bold">
              Price ({totalItems} item) : ₹ {totalPrice}
            </p>
            <button className="bg-red-900 h-full px-15 text-white">
              Place Order
            </button>
          </div>
        </div>

        <div className="w-[30%] bg-white h-[fit-content] flex flex-col gap-1">
          <p className="text-gray-400 px-5 py-3 font-bold">Price Details</p>

          <hr className="border-t-2 border-gray-500 opacity-20" />

          <span className="flex justify-between items-center py-2 px-5">
            <p>Price ({totalItems} item)</p>
            <p>₹ {totalPrice}</p>
          </span>
          <span className="flex justify-between items-center py-2 px-5">
            <p>Discount</p>
            <p className="text-green-600">- ₹ {discount}</p>
          </span>
          <span className="flex justify-between items-center py-2 px-5">
            <p>PlatForm Fee</p>
            <p>₹ {platFormFee}</p>
          </span>

          <hr className="border-t-2 border-dotted border-gray-500 opacity-20 mx-5" />

          <span className="flex justify-between items-center py-3 px-5 font-bold text-lg ">
            <p>Total Amount</p>
            <p>₹ {totalAmount}</p>
          </span>

          <hr className="border-t-2 border-dotted border-gray-500 opacity-20 mx-5" />

          <span className="text-green-600 text-sm font-bold px-5 py-2 ">
            You will save ₹ {totalSaved} on this order{" "}
          </span>
        </div>
      </div>
    </>
  );
}
