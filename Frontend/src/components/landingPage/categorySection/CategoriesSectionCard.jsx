import React from "react";
import { motion } from "framer-motion";
import { hoverEffect } from "../../../animations";

const CategoriesSectionCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="flex flex-col gap-2  items-start justify-center border-2 border-secondary  p-5 rounded-3xl">
      <div className="text-secondary bg-secondary-50 w-25 p-4 rounded-2xl">
        {icon}
      </div>
      <div className="text-xl">{title}</div>
      <div className="">{description}</div>
      <motion.button
        className="border-1 text-secondary  border-background rounded-[25px] cursor-pointer"
        {...hoverEffect}
        onClick={() => {
          handleGetStartedClick();
        }}
      >
        View more
      </motion.button>
    </div>
  );
};

export default CategoriesSectionCard;