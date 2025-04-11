import React from "react";
import {  CircleCheckBig } from "lucide-react";
import CategoriesSmallCard from "./CategoriesSmallCard";
import { hoverEffect } from "../../animations";
import CategoriesSectionCard from "./CategoriesSectionCard";
import { BrainCircuit, Search, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
const CategoriesSection = () => {
  const handleGetStartedClick = () => {};
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:mt-30 mt-0">
      <div className="flex flex-col gap-8 ml-[8%] mt-30 font-display ">
        <div className="text-4xl">Categories Showcase</div>
        <div className="lg:text-2xl text w-[80%] lg:w-[70%]">
          TradeLoop DZ helps Algerian industries connect and trade surplus
          materials in key sectors.
        </div>
        <div className="flex flex-col lg:justify-between lg:items-start ">
          <CategoriesSmallCard
            icon={<CircleCheckBig size={20} className="text-secondary" />}
            title="Metals, Plastics, Wood"
          />
          <CategoriesSmallCard
            icon={<CircleCheckBig size={20} className="text-secondary" />}
            title="Machinery  & Spare Parts"
          />
          <CategoriesSmallCard
            icon={<CircleCheckBig size={20} className="text-secondary" />}
            title="Electronics & Electrical Components"
          />
          <CategoriesSmallCard
            icon={<CircleCheckBig size={20} className="text-secondary" />}
            title="Construction Material"
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-secondary">2.3K</h1>
            <p>Total listings</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-secondary">1.1K</h1>
            <p>Successful Trades</p>
          </div>
        </div>
        <motion.button
          className="border-1 bg-secondary text-background  border-background hover:border-primary text-2xl    py-1 rounded-[10px] cursor-pointer w-50"
          {...hoverEffect}
          onClick={() => {
            handleGetStartedClick();
          }}
        >
          Explore The Marketplace
        </motion.button>
      </div>
      <div className="flex flex-row justify-center items-center gap-10 lg:w-[30%] w-[90%] ml-5 mr-[230px] lg:mt-0 mt-10">
        <div className="flex flex-col gap-5 lg:gap-10 lg:w-[50%] w-[90%] mb-30">
          <CategoriesSectionCard
            icon={<BrainCircuit size={70} />}
            title="AI-Powered Matchmaking"
            description="Our AI will recommend the best matches based on your industry, location, and needs."
            onClick={() => {
              handleGetStartedClick();
            }}
          />
          <CategoriesSectionCard
            icon={<BrainCircuit size={70} />}
            title="AI-Powered Matchmaking"
            description="Partnered transport options to help you move goods between businesses easily."
            onClick={() => {
              handleGetStartedClick();
            }}
          />
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 lg:w-[50%] w-[90%]">
          <CategoriesSectionCard
            icon={<Search size={70} />}
            title="AI-Powered Matchmaking"
            description="Find surplus materials fast with filters by category, location, and condition."
            onClick={() => {
              handleGetStartedClick();
            }}
          />
          <CategoriesSectionCard
            icon={<BadgeCheck size={70} />}
            title="AI-Powered Matchmaking"
            description="Every seller is verified to build trust and transparency in the industrial community."
            onClick={() => {
              handleGetStartedClick();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
