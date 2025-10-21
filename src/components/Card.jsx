import React from "react";
import { FaStar } from "react-icons/fa";

function Card({product}) {

  const {toyName,rating,price,availableQuantity,pictureURL} = product;
  return (
  
      <div className="card bg-base-100  shadow-sm hover:shadow-lg hover:scale-110 transition duration-500 ease-in-out">
        <figure className="h-[300px]">
          <img
            src={pictureURL}
            alt="Shoes"
            className="h-full object-cover w-full"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{toyName}</h2>
          <p className="font-medium">Price: {price}Tk</p>

          <div className="flex justify-between items-center">
            <p className="font-medium">Quantity: {availableQuantity}</p>
            <div className="flex items-center gap-2">
              <p className=" text-end gap-1.5 font-medium">Rating: {rating}</p>
              <span>
                <FaStar style={{ color: "gold",width:"15px" }} />
              </span>
            </div>
          </div>

          <div className="card-actions justify-center">
            <button className="btn bg-linear-to-r from-[#297BE6] to-[#61D2E8] text-white">View More</button>
          </div>
        </div>
      </div>
    
  );
}

export default Card;
