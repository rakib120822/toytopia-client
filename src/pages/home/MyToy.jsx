import React from 'react'
import { useLoaderData } from 'react-router';
import Card from '../../components/Card';

function MyToy() {
  const data = useLoaderData();
  const products = data.slice(0, 3);
  return (
    <div className='py-20'>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mx-auto">
          {products.map((product) => (
            <Card key={product.toyId} product={product} />
          ))}
    </div>
    </div>
  )
}

export default MyToy
