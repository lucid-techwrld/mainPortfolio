import React from "react";
import image from "../assets/images/lucud-pic2.png";

const about = () => {
  return (
    <div
      id="about"
      className="w-full h-54 text-sm md:text-xl lg:text-2xl space-y-5 p-5 italic bg-slate-800 mt-5 text-white grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2"
    >
      <div className="w-full h-64 md:h-96 lg:h-96">
        <img src={image} alt="myimage" className="w-full h-full" />
      </div>
      <div>
        <p className="text-sm md:text-xl lg:text-xl">My Intro</p>
        <h1 className="mb-5 text-xl md:text-2xl ld:text-3xl font-bold text-orange-400">
          About Me
        </h1>
        <p>I'm Davis Ayomide Ariyo, with 4+ years of experrience. </p>
        <p>
          Passionate FullStack developer specializing in building full-stack
          web applications using MongoDB, Postgresql, Typescript, Express.js, React, and Node.js.
          Focused on clean code, responsive design, and delivering seamless user
          experiences
        </p>
        <p>
          Self-taught programmer with proven experience in building live
          projects
        </p>
      </div>
    </div>
  );
};

export default about;
