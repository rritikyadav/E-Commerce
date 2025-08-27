"use client"

import ApiCall from "@/Components/apicall";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";

export default function ProductCard({ params }) {
    const { id } = use(params)
    const product_id = parseInt(id, 10);

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState()

    const ScrollContainer = useRef(null);

    useEffect(() => {
        fetchdata()
    }, [product_id])

    const fetchdata = async () => {
        const products = await ApiCall()
        setProducts(products)
        const product = products.find((p) => (p.id === product_id));
        setProduct(product)
    }


    const handleLeftClick = () => {
        ScrollContainer.current?.scrollBy({ left: -ScrollContainer.current.clientWidth, behavior: "smooth" })
    }

    const handleRightClick = () => {
        ScrollContainer.current?.scrollBy({ left: ScrollContainer.current.clientWidth, behavior: "smooth" })
    }

    if (!product) {
        return <p className="text-center mt-10">Loading product...</p>;
    }


    return (
        <>
            <div className="w-[90%] m-auto mt-10 p-3 box-border flex gap-30 bg-white">

                <img src={product.image} alt="" />

                <div className="flex flex-col gap-7 mt-20">
                    <p className="text-3xl font-bold">{product.title}</p>
                    <p className="text-lg">{product.description}</p>
                    <span className="flex items-center gap-1">
                        <span className="flex items-center gap-1 bg-green-700 px-2 box-border rounded-md text-white  font-bold text-[0.8rem]">
                            <p>{product.rating.rate} </p>
                            <img className="w-[12px] aspect-1/1 invert" src="/star.svg" alt="" />
                        </span>
                        <p>({product.rating.count})</p>
                    </span>
                    <p className="text-xl font-bold">Rs. {product.price}</p>
                    <span className="flex gap-5 items-center font-bold text-white text-xl">
                        <button className="w-[15vw] h-[8vh] bg-yellow-400 flex gap-2 items-center justify-center rounded-md cursor-pointer hover:shadow-lg"><img className="invert" src="/cart.svg" alt="" /><p>Add To Cart</p></button>
                        <button className="w-[15vw] h-[8vh] bg-red-800 flex gap-2 items-center justify-center rounded-md cursor-pointer hover:shadow-lg"><img className="invert" src="/buy.svg" alt="" /><p>Buy Now</p></button>
                    </span>
                </div>
            </div>

            <div className="relative bg-white w-[95%] h-[55vh] m-auto my-5">
                <div onClick={handleLeftClick} className="absolute z-100 top-1/2 -translate-y-1/2 left-0  h-[15vh] w-[2.5vw] rounded-r-md flex items-center justify-center bg-gray-200 shadow-md cursor-pointer"><b>&lt;</b></div>
                <div className="text-xl font-bold mb-6 ml-15 mt-2 ">Similar Products</div>
                <div ref={ScrollContainer} className="w-[100%] h-[45vh] pl-2 box-border grid grid-flow-col auto-cols-[22.5vw] gap-5 overflow-hidden overflow-x-auto scroll-smooth snap-align-center">
                    {products.map((p) => (
                        <Link href={`/Product/${p.id}`} key={p.id}>
                            <div className="  min-w-[100%] h-[38vh] snap-mandatory cursor-pointer hover:scale-102">
                                <img className="w-[100%] h-[80%] object-contain" src={p.image} alt="image" />
                                <p className="line-clamp-1 mt-7 text-center">{p.title}</p>
                                <p className="font-bold text-center">Rs. {p.price}</p>
                            </div></Link>
                    ))}
                </div>
                <div onClick={handleRightClick} className="absolute z-100 top-1/2 -translate-y-1/2  right-0  h-[15vh] w-[2.5vw] rounded-l-md flex items-center justify-center bg-gray-200 shadow-md cursor-pointer"><b>&gt;</b></div>

            </div>


        </>
    )
}