import ApiCall from "./apicall"
import Link from "next/link"

export default async function ProductCardSquare(props) {
    const products = await ApiCall()

    return (
        <div className="w-[32.3vw] h-[65vh] grid gap-1 grid-cols-2 overflow-hidden bg-white p-4 box-border">
            <div className="col-span-2 text-xl mb-4 cursor-pointer capitalize hover:text-red-900"><Link href={`category/${props.category}`}><b>{props.category} &gt;</b></Link></div>
            {products
                .filter((product) => (product.category === props.category)).slice(0, 4)
                .map((product) => {
                    return (
                        <Link href={`Product/${product.id}`} key={product.id}>
                            <div className=" w-[100%] h-[28vh] cursor-pointer hover:scale-102">
                                <img className="w-full h-[60%] object-contain mb-5" src={product.image} alt="" />
                                <p className="w-full h-[10%] text-center line-clamp-1">{product.title}</p>
                                <p className="text-center">RS.{product.price}</p>
                            </div></Link>
                    )
                })}
        </div>
    )
}


