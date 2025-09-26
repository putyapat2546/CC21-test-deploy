import React from 'react'
import { useLoaderData } from 'react-router'

function ProductsPage() {
  const {products} = useLoaderData();
  return (
    <div>ProductsPage
    <ul>
      {products.map((product)=> (<li key={product.id}>{product.id} : {product.title}</li>))}
    </ul>
    </div>
  )
}

export default ProductsPage