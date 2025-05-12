import React from "react";
import OfferCard from "./offerCard";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaDatabase,
  FaSearch,
  FaLayerGroup,
} from "react-icons/fa";

const Offer = () => {
  return (
    <>
      <h2 className="text-center text-white text-xl md:text-2xl lg:text-3xl ">
        Speciliazed In
      </h2>
      <p className="text-orange-400 text-center">What I offer</p>
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 p-10">
        <OfferCard
          head="React.js"
          icon={<FaReact />}
          color="text-blue-400"
          text="Builds fast, responsive UIs with modern components and smooth user experiences."
        />
        <OfferCard
          head="Node.js"
          icon={<FaNodeJs />}
          color="text-green-400"
          text="Creates scalable server-side apps and APIs using JavaScript runtime."
        />
        <OfferCard
          head="Frontend Development"
          icon={<FaHtml5 />}
          color="text-red-400"
          text="Designs clean, responsive interfaces with modern tools and frameworks."
        />
        <OfferCard
          head="Backend Development"
          icon={<FaDatabase />}
          color="text-purple-400"
          text="Handles data, APIs, and server logic with secure and efficient code."
        />
        <OfferCard
          head="Basic SEO"
          icon={<FaSearch />}
          color="text-yellow-400"
          text="Applies simple SEO techniques to improve site visibility and performance."
        />
        <OfferCard
          head="MERN Stack"
          icon={<FaLayerGroup />}
          color="text-teal-400"
          text="Builds full-stack apps using MongoDB, Express, React, and Node.js"
        />
      </div>
    </>
  );
};

export default Offer;
