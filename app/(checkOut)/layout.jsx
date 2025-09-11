"use client"

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function CheckoutLayout({ children }) {

    const Cart = useSelector((state) => state.Cart.items)

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    if (Cart.length === 0) {
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

    const totalPrice = Cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    const totalItems = Cart.length;
    let discount = 0;

    if (totalPrice >= 200) {
        discount = 50;
    } else if (totalPrice >= 100) {
        discount = 20;
    } else if (totalPrice >= 40) {
        discount = 5;
    } else {
        discount = 0;
    }
    const platFormFee = 1;
    const totalAmount = totalPrice - discount + platFormFee;

    return (
        <div className="w-[80%] h-[calc(100vh-12vh)] flex gap-4 m-auto mt-[3vh]">

            <div className="w-[70%] bg-white h-full">
                <div className=" h-[calc(100%-12vh)] overflow-y-auto flex flex-col gap-15 px-5 py-8 box-border scroll-smooth ">
                    {children}
                </div>

                <div className="sticky bottom-0 z-50 w-[100%] h-[12vh] shadow-[0_-4px_6px_rgba(0,0,0,0.1)] bg-white flex justify-between items-center">
                    <p className="ml-5 font-bold">
                        Price To Be Paid ({totalItems} item) : ₹ {totalAmount}
                    </p>
                    <Link className="h-full" href="/placeorder"><button className="bg-red-900 h-full px-15 text-white cursor-pointer">
                        Place Order
                    </button></Link>
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
                    You will save ₹ {discount} on this order{" "}
                </span>
            </div>

        </div>
    )
}