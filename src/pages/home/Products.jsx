import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../../components/Card';

function Products() {
    const products = useLoaderData();
 
  return (
    <div>
      <title>All Products</title>
        <h1 className='text-4xl font-bold text-center my-4'>All <span className='text-[#61D2E8]'>Products</span> </h1>
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10' >
        {
            products.map(product=><Card key={product.toyId} product={product}/>)
        }
      </div>
    </div>
  )
}

export default Products
