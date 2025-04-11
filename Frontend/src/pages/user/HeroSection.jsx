import React from "react";
import { motion } from "framer-motion";
import { hoverEffect, rotateLoop } from "../../animations";
import box from "../../assets/images/heroSection/box.png";
import Navbar from "../../components/global/Navbar";
const HeroSection = () => {
  const handleGetStartedClick = () => { };
  return (
    <>
      <Navbar />

      <div className="flex lg:flex-row flex-col items-start justify-center lg:ml-4 ml-[5%] font-display ">

        <div className="flex flex-col gap-10 text-primary lg:mt-40 mt-30 lg:w-[50%] w-[100%] ">
          <h1 className="lg:text-6xl text-5xl font-bold uppercase lg:w-[80%] w-[90%] ">
            Turn Your <span className="text-secondary">Surplus</span> Into Someone’s
            Solution
          </h1>
          <h3 className=" lg:text-3xl text-4xl">Give Your Surplus a Second Life.</h3>
          <p className="lg:text-2xl text  lg:w-[75%] w-[90%] ">
            The first B2B marketplace in Algeria dedicated to exchanging leftover
            stock, unused materials, and industrial assets.<br /> Save money, reduce
            waste, and build a stronger local industrial ecosystem — one trade at
            a time.
          </p>
          <motion.button
            className="border-1 bg-secondary text-background  border-background hover:border-primary text-2xl px-4 py-1 rounded-[25px] cursor-pointer w-50"
            {...hoverEffect}
            onClick={() => {
              handleGetStartedClick();
            }}
          >
            Get Started
          </motion.button>
        </div>
        <motion.img {...rotateLoop} className="lg:w-[35%] w-[90%] lg:mt-20 mt-5" src={box} alt="box" />
      </div>
    </>
  );
};

export default HeroSection;
