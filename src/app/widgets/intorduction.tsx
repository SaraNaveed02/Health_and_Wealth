import React from "react";
import Button from "../shared/button";

const Different = [
  {
    header: "HEALTH:",
    description1:
      "State of complete physical, mental and social well-being and not merely the absence of disease or infirmity.",
    description2: "A state of being.",
    description3:
      "Considers mental wellbeing as being free from stress or other mental disease.",
  },
  {
    header: "WEALTH:",
    description1:
      "Active process throughh which people beome aware of, and make choices toward a more successful existence.",
    description2: "A practical way of achieving health",
    description3:
      "Focuses on mindfulnes and mind traininng as well, in addition to general mental health.",
  },
];

const Secpage = () => {
  return (
    <section className=" mt-20 lg:mt-6 max-w-screen-lg px-4 py-3 mx-auto">
      {/* Content */}
      <div className="">
        <h4 className="text-[#c39000] font-bold text-2xl md:text-xl sm:text-xl ">
          Introduction
        </h4>
        <p className=" text-lg mt-7 mb-7 text-gray-800">
          Life is about striking a balance between certain fundamental parts of
          life. Health is one of these aspects. We value health in the same way
          that we value time once we have lost it. We cannot rewind time, but
          the good news is that we can regain health with some effort. A person
          in good physical and mental health may appreciate the world to the
          fullest and meet life’s problems with ease and comfort. Health is
          riches implies that health is a priceless asset rather than money or
          ownership of material possessions. There is no point in having money
          if you don’t have good health.
        </p>
        <div>
          <Button text="Learn More" />
        </div>
        <div>
          <h4 className="text-[#c39000] font-bold text-2xl md:text-xl sm:text-xl ">
            Different b/w health and wealth
          </h4>

          <div className="md:flex  gap-x-4 max-w-screen-2xl">
            {Different.map((items, i) => {
              return (
                <div
                  className="my-10 border border-gray-400 text-white bg-[#e4a800]  flex-1 px-8 py-12 rounded-md flex-col items-center justify-center"
                  key={i}
                >
                  <h2 className="text-lg py-2 font-semibold ">
                    {items.header}
                  </h2>
                  <p className="text-sm py-2">
                    <span className="text-black font-extrabold py-2">-</span>
                    {items.description1}
                  </p>
                  <p className="text-sm py-2">
                    <span className="text-black font-extrabold py-2">-</span>
                    {items.description2}
                  </p>
                  <p className="text-sm py-2">
                    <span className="text-black font-extrabold py-2">-</span>
                    {items.description3}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secpage;
