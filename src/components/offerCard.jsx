import React from "react";

const OfferCard = ({ head, icon, text, color }) => {
  return (
    <>
      <div className="w-ful h-auto flex flex-col bg-white  p-4 rounded-2xl text-sm md:text-lg lg:text-lg relative hover:shadow-lg hover:scale-105 transition-transform duration-300 text-black">
        <div className="flex items-center justify-center mb-2">
          <div className={`${color} text-3xl`}>{icon}</div>
        </div>
        <h2 className="font-bold text-lg text-orange-400 text-center mb-2">
          {head}
        </h2>
        <p className="flex-1 text-xs lg:text-sm text-center">{text}</p>
      </div>
    </>
  );
};

export default OfferCard;
