import React, { useState } from "react";

function About() {
  const [isMore, setMore] = useState(false);
  return (
    <div className="px-10 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <h2 className=" text-4xl font-bold   text-[#61D2E8] mb-5">
            About <span className="text-black">Us</span>
          </h2>
          <p>
            At ToyTopia, we believe play is more than just fun—it’s a powerful
            way for children to discover the world around them. That’s why our
            toy selection includes a wide range of educational toys, creativity
            boosters, outdoor play essentials, and character-themed favorites.
            Each product is thoughtfully chosen to support a child’s emotional,
            social, and cognitive development. We are committed to providing
            parents with peace of mind by ensuring every toy meets strict safety
            standards and is made from high-quality, child-friendly materials.
          </p>{" "}
          {isMore ? (
            <p>
              Our team continually updates the collection to reflect the latest
              trends, innovations, and developmental needs of growing children.
              Customer happiness is at the heart of what we do. From easy
              browsing to fast delivery and reliable support, we strive to make
              your shopping experience as delightful as the toys themselves. At
              ToyTopia, we’re dedicated to bringing smiles, spark imagination,
              and create unforgettable moments for families everywhere.
              <span
                onClick={() => setMore(!isMore)}
                className="text-[#61D2E8] underline font-bold cursor-pointer"
              >
                See Less
              </span>
            </p>
          ) : (
            <span
              onClick={() => setMore(!isMore)}
              className="text-[#61D2E8] underline font-bold cursor-pointer"
            >
              See More
            </span>
          )}
        </div>
        <div className="">
          <img
            src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="my-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
