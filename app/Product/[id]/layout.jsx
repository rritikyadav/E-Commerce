"use client"

import Link from "next/link";
import { useState, useEffect, useRef } from "react"
import ApiCall from "@/Components/apicall";

export const generatemetadata = {
  title: "Product Page",
  description: "Product Description Page",
};

export default function ProductLayout({ children }) {
  const [products_1, setproducts_1] = useState([])

  const ref_Container = useRef(null)

  const fetching = async () => {
    const fetched_products = await ApiCall()
    setproducts_1(fetched_products)
  }

  useEffect(() => {
    fetching()
  }, [])

  const handleleftScroll = () => {
    ref_Container.current?.scrollBy({ left: -ref_Container.current.clientWidth, behaviour: "smooth" })
  }

  const handleRightScroll = () => {
    ref_Container.current?.scrollBy({ left: ref_Container.current.clientWidth, behaviour: "smooth" })
  }

  return (
    <>
      {children}
      <div className=" relative w-[95%] h-[50vh] bg-red-900 m-auto my-5 pt-2 box-border text-white">
        <div className="text-2xl font-bold mb-5 ml-5">All Products : </div>
        <div onClick={handleleftScroll} className="w-[2.5vw] h-[15vh] bg-gray-600 rounded-r-md absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">&lt;</div>

        <div ref={ref_Container} className=" w-[100%] h-[40vh] pl-2 box-border grid gap-5 grid-flow-col auto-cols-[22.5vw] overflow-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory">{
          products_1.map((pro) => {
            return (
              <Link key={pro.id} href={`/Product/${pro.id}`}><div className="min-w-[100%] h-[33vh] snap-center hover:scale-102">
                <img className="w-full h-[80%] object-contain" src={pro.image} alt="" />
                <p className="line-clamp-1 text-center mt-7">{pro.title}</p>
                <p className="font-bold text-center">Rs . {pro.price}</p>
              </div></Link>
            )
          })

        }</div>

        <div onClick={handleRightScroll} className="w-[2.5vw] h-[15vh] bg-gray-600 rounded-l-md absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">&gt;</div>

      </div>
    </>

  );
}
