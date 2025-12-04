import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../../components/Card";

function Products() {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSort = (order) => {
    setLoading(true);
    if (order === "asc") {
      data.sort((a, b) => a.price - b.price);
      setProducts([...data]);
      setLoading(false);
    } else {
      data.sort((a, b) => b.price - a.price);
      setProducts([...data]);
      setLoading(false);
    }
  };

  return (
    <div>
      <title>All Products</title>
      <div className="my-10 flex justify-between px-10">
        <h1 className="text-4xl font-bold text-center ">
          All <span className="text-[#61D2E8]">Products</span>{" "}
        </h1>
        <select
          defaultValue="Pick a Framework"
          className="select select-info border-[#61D2E8]"
        >
          <option defaultValue={true}>Sort by</option>
          <option onClick={() => handleSort("asc")}>Low to High</option>
          <option onClick={() => handleSort("dce")}>High to Low</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[600px]">
          <span className="loading loading-spinner loading-xl text-[#61D2E8] text-center"></span>
        </div>
      ) : (
        <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
          {products.map((product) => (
            <Card key={product.toyId} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
