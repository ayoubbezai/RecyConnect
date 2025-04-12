import React from "react";
import { motion } from "framer-motion";
import { hoverEffect } from "../../animations";
const MaterialCard = ({ icon, title, amount }) => {
    return (
        <motion.div {...hoverEffect} className="flex items-center gap-5 rounded-2xl p-2  w-[300px] shadow-md">
            <div>{icon}</div>
            <div className="flex flex-col gap-0">
                <div className="font-bold text-2xl text-gray-600 ">{title}</div>
                <div className=" text-gray-600 ">{amount}</div>
            </div>
        </motion.div>
    );
};

export default MaterialCard;