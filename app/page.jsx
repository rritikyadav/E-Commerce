import CategoryCard from "@/Components/categoryCard"
import ProductCardSquare from "@/Components/ProductCardSquare"

export default function Page() {

  return (
    <>
        <CategoryCard category={"men's clothing"}/>
        <CategoryCard category={"women's clothing"}/>

        <div className="flex gap-2 items-center justify-center">
          <ProductCardSquare category={"men's clothing"}/> <ProductCardSquare category={"jewelery"}/> <ProductCardSquare category={"electronics"}/>
        </div>

        <CategoryCard category={"jewelery"}/>
        <CategoryCard category={"electronics"}/>

    </>
  )
}