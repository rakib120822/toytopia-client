import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Card from "../../components/Card";
import { useLoaderData } from "react-router";
import FeatureCard from "../../components/FeatureCard";
import BrandCard from "../../components/BrandCard";
import Marquee from "react-fast-marquee";

function Home() {
  const data = useLoaderData();
  const products = data.slice(0, 3);

  return (
    <div>
      <HeroSlider />
      <section className="w-11/12 mx-auto my-30">
        <h2 className="text-center text-4xl font-bold  mb-10 text-[#61D2E8]">
          Popular <span className="text-black">Toys</span>
        </h2>
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mx-auto">
          {products.map((product) => (
            <Card key={product.toyId} product={product} />
          ))}
        </div>
      </section>
      <section className="w-11/12 mx-auto my-30 ">
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
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
      <section className="w-11/12 mx-auto my-30 ">
        <h2 className="text-center text-4xl font-bold   text-[#61D2E8]">
          ONLINE <span className="text-black">PARTNERS</span>
        </h2>
        <Marquee autoFill className="flex gap-4" speed={80}>
          <BrandCard
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbWGODrTH5UlucqoCQfkSpHQww74CMTginw&s"
            }
          />
          <BrandCard
            img={
              "https://mir-s3-cdn-cf.behance.net/projects/404/52939b119881319.Y3JvcCw4MDgsNjMyLDAsMA.png"
            }
          />
          <BrandCard
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jCZfj9zZVaUvKtKruPbBbz3dezFqcWgGIQ&s"
            }
          />
          <BrandCard
            img={
              "https://media.licdn.com/dms/image/v2/C4D22AQHhg6z-ac29Eg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1675345413887?e=2147483647&v=beta&t=qV_bZvqDG2-pySKm1dLuuEY_rpcZ0LP3qtbQGwTD4qg"
            }
          />
          <BrandCard
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VIP-AlCz3EN6-VsbyzcS7m9a8WXRDBGoCA&s"
            }
          />
          <BrandCard img={"https://image.pngaaa.com/375/6201375-middle.png"} />
        </Marquee>
      </section>
    </div>
  );
}

export default Home;
