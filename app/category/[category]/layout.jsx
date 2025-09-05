import Link from "next/link"

export const metadata = {
  title: "Category Page",
  description: "Page Which Shows Products According to its Category",
};

export default function CategoryLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-[20vw] h-[calc(100vh-10vh)] sticky top-[10vh] left-0  bg-red-900 py-5 px-2 box-border text-white">

        <h1 className="text-center font-bold text-xl mb-8"> All Categories : </h1>

        <div className="flex flex-col gap-5 ">
          <Link href="/category/men's clothing"><p className="cursor-pointer">&gt; <u>Men's Clothing</u></p></Link>
          <Link href="/category/women's clothing"><p className="cursor-pointer">&gt; <u>Women's Clothing</u></p></Link>
          <Link href="/category/electronics"><p className="cursor-pointer">&gt; <u>Electronics</u></p></Link>
          <Link href="/category/jewelery"><p className="cursor-pointer">&gt; <u>jewelery</u></p></Link>
        </div>

        <h1 className="text-center font-bold text-xl mb-8 mt-10">Filters : </h1>

        <div className="flex flex-col gap-5 ml-5">
          <p>Brand</p>
          <p>Price</p>
          <p>Rating</p>
        </div>

      </div>
      {children}
    </div>
  );
}
