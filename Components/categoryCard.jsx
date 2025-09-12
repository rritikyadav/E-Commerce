"use client"

import { useSelector } from "react-redux"
import Link from "next/link"
import Image from "next/image"

export default function CategoryCard(props) {

    const products = useSelector((state) => state.Products.items)

    return (
        <div className="w-[98vw] h-auto m-auto my-[2vh] bg-white grid gap-3 items-center grid-cols-1 
                        md:h-[35vh] md:grid-cols-6 md:gap-1">
            <div className="md:col-span-6 text-xl ml-2 mb-4 mt-2 capitalize hover:text-red-900"><Link href={`/category/${props.category}`}><b>{props.category} &gt;</b></Link></div>
            {products
                .filter((product) => product.category === props.category).slice(0, 6)
                .map((product) => {
                    return (
                        <Link key={product.id} href={`Product/${product.id}`} ><div className=" w-[100%] h-[12vh] flex gap-2 border-b border-gray-200 pb-2 hover:scale-102
                                                                                                 md:h-[28vh] md:flex-col md:gap-0 md:pb-0 md:border-0">
                            <Image className="w-[20vw] md:w-full h-full md:h-[60%] object-contain mb-5" src={product.image} alt="image" width={100} height={100} />
                            <span className="flex flex-col items-center gap-3 md:gap-0.5">
                            <p className="w-[65vw] md:w-full text-center line-clamp-1">{product.title}</p>
                            <p className="w-[15vw] md:w-full text-center font-bold whitespace-nowrap">₹ {product.price}</p>
                            </span>
                        </div></Link>
                    )
                })}

        </div>
    )
}





