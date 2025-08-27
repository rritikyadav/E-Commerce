export default async function ApiCall(){
        const response = await fetch('https://fakestoreapi.com/products', { method: "GET" });
        const products = await response.json();
        return products;
}