"use client"

import { handleDecreaseQuantity, handleIncreaseQuantity, handleQuantity, handleRemove } from "@/redux/cartSlice";
import Image from "next/image";
import { useSelector , useDispatch } from "react-redux";

export default function Cartpage() {

    const Cart = useSelector((state)=> state.Cart.items);
    const dispatch = useDispatch();

    return (
        <div>
                {Cart.map((item, index) => (
                    <div key={index} className="grid grid-cols-10">
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
                                    onClick={() => dispatch(handleDecreaseQuantity(item.id))}
                                    className="w-[30px] h-[30px] rounded-full shadow-md bg-gray-100 text-center font-bold "
                                >
                                    -
                                </button>
                                <input
                                    onChange={(e) => dispatch(handleQuantity({id : item.id , value : Number(e.target.value)}))}
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
                                        dispatch(handleIncreaseQuantity(item.id));
                                    }}
                                    className="w-[30px] h-[30px] rounded-full shadow-md bg-gray-100 text-center font-bold "
                                >
                                    +
                                </button>
                            </span>
                            <span
                                onClick={() => {
                                    dispatch(handleRemove(item.id));
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
    );
}
