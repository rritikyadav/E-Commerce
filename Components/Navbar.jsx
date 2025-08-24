

export default function Navbar() {
    return (
        <div className="bg-red-900 w-full h-[9vh] flex justify-between items-center pr-10 box-border">

            <p className="ml-6 invert">E-Commerce</p>

            <div className="flex items-center w-[45%] border border-white pl-1 box-border rounded-md">
                <div><img src="search.svg" alt="" /></div>
                <input className="w-[96%]  text-white text-base py-1.5 px-4 box-border outline-0 rounded-md" name="search" placeholder="Search" type="text" />
            </div>

            <div className="flex gap-10 items-center text-white">
                <p>Log IN</p>
                <img className="invert" src="cart.svg" alt="" />
                <p>Become a Seller</p>
            </div>

        </div>
    )
}