import React from "react";
import { motion } from "framer-motion";
import { hoverEffect } from "../../animations";
const OverviewCard = ({ title, value, percentage, icon }) => {
    return (
        <motion.div {...hoverEffect} className="flex flex-col gap-2 rounded-2xl p-5 w-[270px] shadow-md">
            <div className="flex items-center justify-between w-full">
                <div>{title}</div>
                <div>{icon}</div>
            </div>
            <div className="font-bold text-2xl text-gray-600 ">+{value}</div>
            <div>{percentage}</div>
        </motion.div>
    );
};

export default OverviewCard;