import Image from "next/image";
import React from "react";
import childern from '../../../public/image/childern.jpg'

const Health = () => {
  return (
    <section className="max-w-screen-lg mx-auto h-full px-4 py-3">
      <div className="border rounded-lg shadow-lg py-6 px-4 border-yellow-300  ">
        <h2 className="text-[#c39000] font-bold  text-2xl md:text-xl sm:text-xl py-3 ">Good Health for Children</h2>
        <p className="text-md text-black py-2">
          Childhood is an ideal period to inculcate healthy behaviours in
          children. Children’s health is determined by a variety of factors,
          including diet, hydration, sleep schedule, hygiene, family time,
          doctor visits, and physical exercise. Following are a few key points
          and health tips that parents should remember for their children:
        </p>
        <ul className="">
          <li className="py-2 text-md text-black">
            <span className="font-bold">1. </span>Never allow your children to get by without nutritious food. Fruits
            and vegetables are essential.
          </li>
          <li className="text-md py-2 text-black">
          <span className="font-bold">2. </span>    Breakfast is the most important meal of the day, therefore teach
            them to frequently wash their hands and feet.
          </li>
          <li className="text-md py-2 text-black">
          <span className="font-bold">3. </span> Sleep is essential for your child.
          </li>
          <li className="text-md py-2 text-black">
          <span className="font-bold">4. </span>    Make it a habit for them to drink plenty of water.
          </li>
          <li className="text-md py-2 text-black">
          <span className="font-bold">5. </span>   Encourage physical activity and sports.
          </li>
          <li className="text-md py-2 text-black">
          <span className="font-bold">6. </span>   Allow them enough time to sleep.
          </li>
          <li className="text-md py-2 text-black">
          <span className="font-bold">7. </span>   It is critical to visit the doctor on a regular basis for checks.
          </li>
        </ul>
        <p className="text-md text-black py-4">
          Parents frequently focus solely on their children’s physical
          requirements. They dress up their children’s wounds and injuries and
          provide them with good food. However, they frequently fail to detect
          their child’s deteriorating mental health. This is because they do not
          believe that mental health is important.
        </p>
      </div>
        <Image src={childern} alt="10 healthy habits for childern" className="p-8 shadow-lg rounded-sm"/>
    </section>
  );
};

export default Health;
