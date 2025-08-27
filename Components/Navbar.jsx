import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-red-900 w-full h-[9vh] flex justify-between items-center pr-10 box-border">

           <Link href="/"><p className="ml-6 invert">E-Commerce</p></Link>

            <div className="flex items-center w-[45%] border border-white pr-1 box-border rounded-md">
                <input className="w-[96%]  text-white text-base py-1.5 px-4 box-border outline-0 rounded-md" name="search" placeholder="Search" type="text" />
                <div className="cursor-pointer hover:scale-105"><img src="/search.svg" alt="" /></div>
            </div>

            <div className="flex gap-10 items-center text-white mr-8">
                <Link href="/login"><span className="flex gap-1">
                <img className="invert" src="/login.svg" alt="" />
                <p>Logn In</p>
                </span></Link>
                <span className="flex gap-1">
                <img className="invert" src="/cart.svg" alt="" />
                <p>Cart</p>
                </span>
            </div>

        </div>
    )
}