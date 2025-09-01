"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        setLoggedIn(!!token)

        const handleStorage = () => {
            const token = localStorage.getItem("token")
            setLoggedIn(!!token)
        }
        window.addEventListener("storage", handleStorage)

        return () => {
            window.removeEventListener("storage", handleStorage)
        }
    }, [])

    const handleLogout = () => {
        const confirmation = confirm("You Really Want To Log Out")
        if (confirmation) {
            localStorage.removeItem("token")
            window.dispatchEvent(new Event("storage"))
            alert("Logged Out Successfully")
            router.push("/login")
        }
    }

    return (
        <div className="sticky top-0 z-10000 bg-red-900 w-full h-[9vh] flex justify-between items-center pr-10 box-border">

            <Link href="/"><p className="ml-6 invert">E-Commerce</p></Link>

            <div className="flex items-center w-[45%] border border-white pr-1 box-border rounded-md">
                <input className="w-[96%]  text-white text-base py-1.5 px-4 box-border outline-0 rounded-md" name="search" placeholder="Search" type="text" />
                <div className="cursor-pointer hover:scale-105"><img src="/search.svg" alt="" /></div>
            </div>

            <div className="flex gap-10 items-center text-white mr-8">
                {loggedIn ? (<span onClick={handleLogout} className="flex gap-1 cursor-pointer">
                    <img className="invert" src="/login.svg" alt="" />
                    <p>Log Out</p>
                </span>) : (<Link href="/login"><span className="flex gap-1">
                    <img className="invert" src="/login.svg" alt="" />
                    <p>Log In</p>
                </span></Link>)}

                <span className="flex gap-1">
                    <img className="invert" src="/cart.svg" alt="" />
                    <p>Cart</p>
                </span>
            </div>

        </div>
    )
}