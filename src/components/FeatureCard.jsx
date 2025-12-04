import React from "react";

function FeatureCard({ imgUrl, title, des }) {
  return (
    <div className="border border-rich-black-50 rounded-2xl  flex justify-center items-center">
      <div className="text-center p-4">
        <img src={imgUrl} alt="photo" className="mb-5 mx-auto " />
      <h3 className=" font-bold text-xl ">
        {title}
      </h3>
      <p className="font- ">
        {des}
       
      </p>
      </div>
    </div>
  );
}

export default FeatureCard;
