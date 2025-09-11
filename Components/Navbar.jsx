"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLoggedIn(!!token);

        const handleStorage = () => {
            const token = localStorage.getItem("token");
            setLoggedIn(!!token);
        };
        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, []);

    const handleLogout = () => {
        const confirmation = confirm("You Really Want To Log Out");
        if (confirmation) {
            localStorage.removeItem("token");
            window.dispatchEvent(new Event("storage"));
            router.push("/login");
        }
    };

    const handleCart = () => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/cart");
        } else {
            const confirmation = confirm("To Access Cart LogIn First");
            if (confirmation) {
                router.push("/login");
                return;
            }
        }
    };

    return (
        <div className="sticky top-0 z-10000 bg-red-900 w-full h-[9vh] flex justify-between items-center pr-10 box-border">
            <Link href="/">
                <p className="ml-6 invert">E-Commerce</p>
            </Link>

            <div className="flex items-center w-[45%] border border-white pr-1 box-border rounded-md">
                <input
                    className="w-[96%]  text-white text-base py-1.5 px-4 box-border outline-0 rounded-md"
                    name="search"
                    placeholder="Search"
                    type="text"
                />
                <div className="cursor-pointer hover:scale-105">
                    <Image src="/search.svg" alt="search" width={24} height={24} />
                </div>
            </div>

            <div className="flex gap-10 items-center text-white mr-8">
                {loggedIn ? (
                    <span onClick={handleLogout} className="flex gap-1 cursor-pointer">
                        <Image
                            className="invert"
                            src="/login.svg"
                            alt="logout"
                            width={24}
                            height={24}
                        />
                        <p>Log Out</p>
                    </span>
                ) : (
                    <Link href="/login">
                        <span className="flex gap-1">
                            <Image
                                className="invert"
                                src="/login.svg"
                                alt="login"
                                width={24}
                                height={24}
                            />
                            <p>Log In</p>
                        </span>
                    </Link>
                )}

                <span onClick={handleCart} className="flex gap-1 cursor-pointer">
                    <Image
                        className="invert"
                        src="/cart.svg"
                        alt="cart"
                        width={24}
                        height={24}
                    />
                    <p>Cart</p>
                </span>
            </div>
        </div>
    );
}
