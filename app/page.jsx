"use client"

import CategoryCard from "@/Components/categoryCard"
import ProductCardSquare from "@/Components/ProductCardSquare"
import Slider from "@/Components/slider"
import { useDispatch } from "react-redux"
import { fetchProducts } from "@/redux/productSlice.js"
import { useEffect } from "react"

export default function Page() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <>
    <Slider/>
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