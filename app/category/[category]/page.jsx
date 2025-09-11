"use client"

import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CategoryPage() {

  const { category } = useParams()
  const heading = decodeURIComponent(category);

  const products = useSelector((state) => state.Products.items)

  return (
    <div className="overflow-y-auto">
      <div className="capitalize text-4xl text-center m-5 font-semibold p-3">
        {heading}
      </div>
      <div className="flex flex-col gap-3 mb-5 w-[80vw]">
        {products
          .filter((product) => product.category === heading)
          .map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white w-[95%] h-[30vh] m-auto flex items-center gap-[3%] pl-4 box-border"
              >
                <Image
                  className="w-[20%] h-[99%] object-contain"
                  src={product.image}
                  alt="image"
                  width={100}
                  height={100}
                />
                <div className="w-[60%] flex flex-col gap-2">
                  <p className="text-xl font-bold">{product.title}</p>
                  <p className="line-clamp-2">{product.description}</p>
                  <span className="flex items-center gap-1">
                    <span className="flex items-center gap-1 bg-green-700 px-2 box-border rounded-md text-white  font-bold text-[0.8rem]">
                      <p>{product.rating.rate} </p>
                      <Image
                        className="w-[12px] aspect-1/1 invert"
                        src="/star.svg"
                        alt="star"
                        width={24}
                        height={24}
                      />
                    </span>
                    <p>({product.rating.count})</p>
                  </span>
                  <p className="text-xl font-bold mt-5">₹ {product.price}</p>
                </div>
                <Link href={`/Product/${product.id}`}>
                  <p className=" text-xl text-blue-600 underline text-center text-nowrap">
                    View Product
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
