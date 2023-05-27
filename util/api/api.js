
export function getProducts(category,setProducts) {
        if(category!="All")
    {
     fetch(`https://fakestoreapi.com/products/category/${category}`)
     .then(res=>res.json())
     .then(json=>setProducts(json))
   }
    else 
    {
     fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
             .then(json=>setProducts(json))
    }
}