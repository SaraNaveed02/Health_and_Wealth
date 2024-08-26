import React from "react";
import Image from "next/image";
import Button from "../shared/button";
import veg from '../../../public/image/veg.jpeg'

const Hero = () => {
  return (
    <section className="max-w-screen-lg  mx-auto">
     <div className="md:flex sm:flex-row gap-5  items-center px-4 py-3 ">
         {/* LEFT */}
         <div className="flex-1 mb-4 ">
        <h1 className="text-[#c39000] font-bold text-2xl md:text-xl sm:text-xl ">Your health is your real wealth</h1>
        <p className=" text-lg mt-7 mb-7 text-gray-800">
         Eating healthy can cost you money,
         <br/>
          but eating unhealthy can cost you your life.
        </p>
      </div>
        {/* RIGHT */}
      <div className="flex-1 ">
        <Image src={veg} alt="person eating" className=" h-1/2 "/>
      </div>
     </div>
    </section>
  );
};

export default Hero;
