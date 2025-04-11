import React from "react";
import { motion } from "framer-motion";
import { hoverEffect } from "../../../animations";

const HeroSection = () => {
  const handleGetStartedClick = () => {};
  return (
    <div>
      <div className="flex flex-col gap-5 text-primary mt-40 w-1/3">
        <h1 className="text-4xl font-bold uppercase w-1/5">
          Turn Your <span className="text-third">Surplus</span> Into Someone’s
          Solution
        </h1>
        <h3 className="uppercase text-2xl">Give Your Surplus a Second Life.</h3>
        <p>
          The first B2B marketplace in Algeria dedicated to exchanging leftover
          stock, unused materials, and industrial assets. Save money, reduce
          waste, and build a stronger local industrial ecosystem — one trade at
          a time.
        </p>
        <motion.button
          className="border-1 bg-secondary text-background  border-background hover:border-primary px-4 py-1 rounded-[10px] cursor-pointer"
          {...hoverEffect}
          onClick={() => {
            handleGetStartedClick();
          }}
        >
          Sign Up
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
