import ApiCall from "./apicall"
import Link from "next/link"

export default async function CategoryCard(props) {
    const products = await ApiCall()

    return (
        <div className="w-[98vw] h-[35vh] m-auto my-[2vh] bg-white overflow-hidden grid gap-1 items-center grid-cols-1 lg:grid-cols-4 xl:grid-cols-6">
            <div className="col-span-6 text-xl ml-2 mb-4 mt-2 capitalize hover:text-red-900"><Link href={`/category/${props.category}`}><b>{props.category} &gt;</b></Link></div>
            {products
                .filter((product) => product.category === props.category).slice(0, 6)
                .map((product) => {
                    return (
                     <Link key={product.id} href={`Product/${product.id}`} ><div className=" w-[100%] h-[28vh] cursor-pointer hover:scale-102">
                            <img className="w-full h-[60%] object-contain mb-5" src={product.image} alt="image" />
                            <p className="w-full h-[10%] text-center line-clamp-1">{product.title}</p>
                            <p className="text-center">RS.{product.price}</p>
                        </div></Link>
                    )
                })}

        </div>
    )
}


