"use client";

import Link from "next/link";
import { useRef , useEffect } from "react";

const SliderBoxes = [
    {
        id: "1",
        class: "bg-men",
        title: "Shop in Men's Clothing",
        line: "₹ 10.95/- onwards",
        link: "men's clothing",
    },
    {
        id: "2",
        class: "bg-jewelery",
        title: "Biggest Sale on Jeweleries",
        line: "Up To 50% Off",
        link: "jewelery",
    },
    {
        id: "3",
        class: "bg-women",
        title: "Shop in Women's Clothing",
        line: "₹ 20.95/- onwards",
        link: "women's clothing",
    },
    {
        id: "4",
        class: "bg-electronics",
        title: "Grab Your Devices Now",
        line: "From ₹ 50.95/- only",
        link: "electronics",
    },
];


export default function Slider() {

    const scroll_Ref = useRef(null);

    const handleLeftScroll = () => {
        scroll_Ref.current?.scrollBy({ left: -window.innerWidth, behavior: "smooth" })
    }

    const handleRightScroll = () => {
        scroll_Ref.current?.scrollBy({ left: window.innerWidth, behavior: "smooth" })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (scroll_Ref.current) {
                const maxScroll = scroll_Ref.current.scrollWidth - scroll_Ref.current.clientWidth;

                if (scroll_Ref.current.scrollLeft >= maxScroll) {
                    scroll_Ref.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    handleRightScroll();
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[50vh] w-screen mt-5 bg-white overflow-hidden ">
            <span onClick={handleLeftScroll}
                className="w-[2.5vw] h-[30vh] absolute top-1/2 left-0 -translate-y-1/2
                            bg-white/20 backdrop-blur-sm z-500 flex items-center justify-center
                             cursor-pointer text-4xl font-bold"
            >
                &lt;
            </span>

            <div ref={scroll_Ref} className="overflow-x-auto scroll-smooth snap-x snap-mandatory h-full flex">
                {SliderBoxes.map((box) => (
                    <div
                        key={box.id}
                        className={`relative ${box.class} h-full w-screen flex-shrink-0 snap-center`}
                    >
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl flex flex-col items-center gap-2">
                            <p>{box.title}</p>
                            <p>{box.line}</p>
                            <Link href={`/category/${box.link}`}>
                                <button className="py-2 px-15 bg-red-900 text-white rounded-md text-lg mt-10 cursor-pointer">
                                    Shop Now
                                </button>
                            </Link>
                        </span>
                    </div>
                ))}
            </div>

            <span onClick={handleRightScroll}
                className="w-[2.5vw] h-[30vh] absolute top-1/2 right-0 -translate-y-1/2
             bg-white/20 backdrop-blur-sm z-500 flex items-center justify-center
              cursor-pointer text-4xl font-bold"
            >
                &gt;
            </span>
        </div>
    );
}
