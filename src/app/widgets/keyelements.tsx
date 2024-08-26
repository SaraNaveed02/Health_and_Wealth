import Image from "next/image";
import React from "react";
import key from "../../../public/image/key.png";
import Link from "next/link";
import { describe } from "node:test";

const links = [
  {
    header: "Tips for Better Health",
    image: "/image/tips.png",
    link: `https://www.youtube.com/watch?v=FoRku07ShZM`,
  },
  {
    header:
      "  12 HEALTHY HABITS & TIPS | change your life + feel better long term",
    image: "/image/healthytips.jpeg",
    link: `https://www.youtube.com/watch?v=QWF9mGtjju4`,
  },
  {
    header: "What If You Stop Eating Sugar For 30 Days?",
    image: "/image/sgar.jpeg",
    link: `https://www.youtube.com/watch?v=XS_kjTAnpP0&list=PLpTTF6wMDLR6P3IMIjrraMa4v9f076ZBn&index=3`,
  },
  {
    header: "A healthy diet, a healthier world",
    image: "/image/diet.jpeg",
    link: `https://www.youtube.com/watch?v=XMcab1MFaLc`,
  },
  {
    header: "How the food you eat affects your brain",
    image: "/image/brain.jpeg",
    link: `https://www.youtube.com/watch?v=FoRku07ShZM`,
  },
  {
    header: " What causes headaches?",
    image: "/image/headaches.jpeg",
    link: `https://www.youtube.com/watch?v=KpHP8VmxnBo`,
  },
  {
    header: "What happens during a heart attack?",
    image: "/image/heart.jpeg",
    link: `https://www.youtube.com/watch?v=FoRku07ShZM`,
  },
];

const descriptions = [
  {
    description:
      " If you wish to acquire a healthy lifestyle, you will certainly have to make some changes in your life. Maintaining a healthy lifestyle demands consistent habits and disciplined life. There are various good habits that you can adopt like exercising regularly which will maintain your physical fitness.",
  },
  {
    description:
      "To live a healthy life, one must make some lifestyle modifications.These modifications can include changes to your food habits, sleeping routines, and lifestyle. You should eat a well-balanced, nutrient-dense diet for your physical wellness.",
  },
  {
    description:
      "Further, it will prevent obesity and help you burn out extra fat from your body. After that, a balanced diet is of great importance. When you intake appropriate amounts of nutrition, vitamins, proteins, calories and more, your immune system will strengthen. This will, in turn, help you fight off diseases powerfully resulting in a disease-free life.",
  },
  {
    description:
      " Above all, cleanliness plays a significant role in maintaining a healthy lifestyle. Your balanced diet and regular exercise will be completely useless if you live in an unhealthy environment. One must always maintain cleanliness in their surroundings so as to avoid the risk of catching communicable diseases.",
  },
];

const Elements = () => {
  return (
    <section className="max-w-screen-lg mx-auto h-full px-4 py-3 ">
      <h1 className="text-[#c39000] font-bold  text-2xl md:text-xl sm:text-xl  ">
        Key Elements Of A Healthy Lifestyle
      </h1>
      <div className="lg:flex xl:flex  sm:flex-row  ">
        {/* Content right */}
        <div className="lg:w-full shadow-xl rounded-xl border mt-10 border-yellow-300 py-8 px-8">
          {descriptions.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-xl md:text-md text-black font-normal mb-8 mt-4">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* Content left */}
        <div className="py-6 px-4 lg:w-1/3 ">
          <h2 className="text-[#c39000] font-bold  text-2xl md:text-xl sm:text-xl">
            You May Like
          </h2>
          {links.map((items, i) => {
            return (
              <div className="" key={i}>
                <Link className="flex items-end p-2 " href={items.link}>
                  <Image
                    className="rounded-md"
                    src={items.image}
                    alt="videos"
                    width={50}
                    height={50}
                  />
                  <h4 className="text-sm px-2  ">{items.header}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 flex justify-center items-center shadow-xl rounded-lg">
        <Image src={key} alt="Key Elements Of A Healthy Lifestyle" className="max-w-[100%] max-h-[70%]"/>
      </div>
    </section>
  );
};

export default Elements;
