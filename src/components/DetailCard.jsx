import React from "react";
import { FaStar } from "react-icons/fa";

function DetailCard({ data }) {
  const {
    pictureURL,
    toyName,
    price,
    availableQuantity,
    rating,
    description,
    sellerName,
  } = data;

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
        <div>
          <p className="font-medium text-md">{description}</p>
        </div>
        <p className="font-medium">Price: {price}Tk</p>
        <div className="flex justify-between items-center">
          <p className="font-medium">Quantity: {availableQuantity}</p>
          <div className="flex items-center gap-2">
            <p className=" text-end gap-1.5 font-medium">Rating: {rating}</p>
            <span>
              <FaStar style={{ color: "gold", width: "15px" }} />
            </span>
          </div>
        </div>
        <p className="font-medium">Seller : {sellerName}</p>
      </div>
    </div>
  );
}

export default DetailCard;
