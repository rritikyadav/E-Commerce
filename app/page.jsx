export default async function Page() {

  const response = await fetch('https://fakestoreapi.com/products?limit=5', { method: "GET" });
  const products = await response.json();
  console.log(products);

  return (
    <>
      <div className="w-[98vw] h-[80vh] m-auto mt-[5vh] bg-white grid grid-cols-1 md:grid-cols-2">
        {products.map((product)=>{
          return(
            <div key={product.id} className="grid-col-1">
                <img src={product.image} alt="" />
                <p>{product.title}</p>
                <p>{product.price}</p>
            </div>
          )
        })}

      </div>
    </>
  )
}