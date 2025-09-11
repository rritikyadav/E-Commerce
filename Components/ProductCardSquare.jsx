"use client"

import { useSelector } from "react-redux"
import Link from "next/link"
import Image from "next/image"

export default function ProductCardSquare(props) {
    
    const products = useSelector((state)=>state.Products.items)

    return (
        <div className="w-[32.3vw] h-[65vh] grid gap-1 grid-cols-2 overflow-hidden bg-white p-4 box-border">
            <div className="col-span-2 text-xl mb-4 capitalize hover:text-red-900"><Link href={`category/${props.category}`}><b>{props.category} &gt;</b></Link></div>
            {products
                .filter((product) => (product.category === props.category)).slice(0, 4)
                .map((product) => {
                    return (
                        <Link href={`Product/${product.id}`} key={product.id}>
                            <div className=" w-[100%] h-[28vh] hover:scale-102">
                                <Image className="w-full h-[60%] object-contain mb-5" src={product.image} alt="image" width={100} height={100} />
                                <p className="w-full h-[10%] text-center line-clamp-1">{product.title}</p>
                                <p className="text-center">₹ {product.price}</p>
                            </div></Link>
                    )
                })}
        </div>
    )
}


