import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Card from "../../components/Card";
import { useLoaderData } from "react-router";
import FeatureCard from "../../components/FeatureCard";
import BrandCard from "../../components/BrandCard";
import Marquee from "react-fast-marquee";

function Home() {
  const data = useLoaderData();
  const products = data.slice(0, 4);

  return (
    <div>
      <title>ToyTopia - Home</title>
      <HeroSlider />
      <section className=" px-10 mx-auto ">
        <h2 className="text-center text-4xl font-bold  my-10 text-[#61D2E8]">
          Popular <span className="text-black">Toys</span>
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 mx-auto">
          {products.map((product) => (
            <Card key={product.toyId} product={product} />
          ))}
        </div>
      </section>
      <section className="px-10 ">
        <h2 className="text-center text-4xl font-bold  my-10 text-[#61D2E8]">
          Feature <span className="text-black">Section</span>
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
          <FeatureCard
            imgUrl={"https://img.icons8.com/dotty/80/free-shipping.png"}
            title={"FAST SHIPPING"}
            des={"Fast shipping"}
          />
          <FeatureCard
            imgUrl={"https://img.icons8.com/ios/50/bank-cards--v1.png"}
            title={"ONLINE PAYMENT"}
            des={"Payment Methods"}
          />
          <FeatureCard
            imgUrl={"https://img.icons8.com/glyph-neue/64/online-support.png"}
            title={"SUPPORT 24/7"}
            des={"Unlimited Help Desk"}
          />
          <FeatureCard
            imgUrl={"https://img.icons8.com/ios/50/truck--v1.png"}
            title={"ON TIME DELIVERY"}
            des={"On Time Delivery"}
          />
        </div>
      </section>
      <section className="px-10 ">
        <h2 className="text-center text-4xl font-bold  my-10 text-[#61D2E8]">
          ONLINE <span className="text-black">PARTNERS</span>
        </h2>
        <Marquee autoFill className="flex gap-4" speed={80}>
          
          <BrandCard
            img={
              "https://i.ibb.co.com/q3mjbZtz/52939b119881319-Y3-Jvc-Cw4-MDgs-Nj-My-LDAs-MA-removebg-preview.png"
            }
          />
          <BrandCard
            img={"https://i.ibb.co.com/hJ5r4c7J/images-removebg-preview.png"}
          />
          <BrandCard
            img={
              "https://i.ibb.co.com/q3W8h9jF/1675345413887-removebg-preview.png"
            }
          />
          <BrandCard
            img={
              "https://i.ibb.co.com/7FpPMFD/6201375-middle-removebg-preview.png"
            }
          />
          <BrandCard
            img={"https://i.ibb.co.com/m5253PJG/images-2-removebg-preview.png"}
          />
        </Marquee>
      </section>
    </div>
  );
}

export default Home;
