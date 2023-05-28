
export async function  getProducts(category,setProducts) {
        if(category!="All")
    {
    await fetch(`https://fakestoreapi.com/products/category/${category}`)
     .then(res=>res.json())
     .then(json=>setProducts(json))
   }
    else 
    {
      await fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
             .then(json=>setProducts(json))
    }
}