"use client"

import { useSelector } from "react-redux"
import Link from "next/link"
import Image from "next/image"

export default function ProductCardSquare(props) {
    
    const products = useSelector((state)=>state.Products.items)

    return (
        <div className="flex-1 h-auto grid gap-4 grid-cols-2 overflow-hidden bg-white p-1.5 pt-3 box-border
                        md:gap-1 md:h-[65vh] md:p-4">
            <div className="col-span-2 text-xl capitalize hover:text-red-900
                            md:mb-4">
                <Link href={`category/${props.category}`}><b>{props.category} &gt;</b></Link></div>
            {products
                .filter((product) => (product.category === props.category)).slice(0, 4)
                .map((product) => {
                    return (
                        <Link href={`Product/${product.id}`} key={product.id}>
                            <div className=" w-[100%] h-[23vh] hover:scale-102 md:h-[28vh]">
                                <Image className="w-full h-[60%] md:h-[60%] object-contain mb-3 md:mb-5" src={product.image} alt="image" width={100} height={100} />
                                <p className="w-full text-center line-clamp-1">{product.title}</p>
                                <p className="text-center">₹ {product.price}</p>
                            </div></Link>
                    )
                })}
        </div>
    )
}


