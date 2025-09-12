"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter , useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { handleAddItems } from "@/redux/cartSlice";

export default function ProductCard() {
  
  const { id } = useParams();
  const product_id = parseInt(id, 10);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.items)

  const [product, setProduct] = useState();

  const router = useRouter();

  const ScrollContainer = useRef(null);

  useEffect(() => {
    const product = products.find((p) => p.id === product_id);
    setProduct(product);
  }, []);


  const handleLeftClick = () => {
    ScrollContainer.current?.scrollBy({
      left: -ScrollContainer.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    ScrollContainer.current?.scrollBy({
      left: ScrollContainer.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (product) => {
    console.log(product);
    const token = localStorage.getItem("token");
    if (!token) {
      const confirmation = confirm("Log In To Access the Cart");
      if (confirmation) {
        router.push("/login");
        return;
      }
    } else {
      dispatch(handleAddItems(product))
      router.push("/cart");
    }
  };

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  return (
    <>
      <div className="w-[90%] m-auto mt-10 p-3 box-border flex gap-30 bg-white">
        <Image
          className="object-contain"
          src={product.image}
          alt="image"
          width={500}
          height={800}
        />

        <div className="flex flex-col gap-7 mt-20">
          <p className="text-3xl font-bold">{product.title}</p>
          <p className="text-lg">{product.description}</p>
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
          <p className="text-xl font-bold">₹ {product.price}</p>
          <span className="flex gap-5 items-center font-bold text-white text-xl">
            <button
              onClick={() => {
                handleAddToCart(product);
              }}
              className="w-[15vw] h-[8vh] bg-yellow-400 flex gap-2 items-center justify-center rounded-md cursor-pointer hover:shadow-lg"
            >
              <Image
                className="invert"
                src="/cart.svg"
                alt="cart"
                width={24}
                height={24}
              />
              <p>Add To Cart</p>
            </button>
            <button className="w-[15vw] h-[8vh] bg-red-800 flex gap-2 items-center justify-center rounded-md cursor-pointer hover:shadow-lg">
              <Image
                className="invert"
                src="/buy.svg"
                alt="buy"
                width={24}
                height={24}
              />
              <p>Buy Now</p>
            </button>
          </span>
        </div>
      </div>

      <div className="relative bg-white w-[95%] h-[50vh] m-auto my-5 pt-2 box-border">
        <div
          onClick={handleLeftClick}
          className="absolute z-100 top-1/2 -translate-y-1/2 left-0  h-[15vh] w-[2.5vw] rounded-r-md flex items-center justify-center bg-gray-200 shadow-md cursor-pointer"
        >
          <b>&lt;</b>
        </div>
        <div className="text-2xl font-bold mb-5 ml-5 ">All Products : </div>
        <div
          ref={ScrollContainer}
          className="w-[100%] h-[40vh] pl-2 box-border grid grid-flow-col auto-cols-[22.5vw] gap-5 overflow-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {products.map((p) => (
            <Link href={`/Product/${p.id}`} key={p.id}>
              <div className="  min-w-[100%] h-[33vh] snap-center hover:scale-102">
                <Image
                  className="w-[100%] h-[80%] object-contain"
                  src={p.image}
                  alt="image"
                  width={100}
                  height={100}
                />
                <p className="line-clamp-1 mt-7 text-center">{p.title}</p>
                <p className="font-bold text-center">Rs. {p.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div
          onClick={handleRightClick}
          className="absolute z-100 top-1/2 -translate-y-1/2  right-0  h-[15vh] w-[2.5vw] rounded-l-md flex items-center justify-center bg-gray-200 shadow-md cursor-pointer"
        >
          <b>&gt;</b>
        </div>
      </div>
    </>
  );
}
