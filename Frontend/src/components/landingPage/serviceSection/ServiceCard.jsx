import React from "react";
import { motion } from "framer-motion";
import { hoverEffect } from "../../../animations";
const ServiceCard = ({ img, title, description }) => {
    return (
        <motion.div {...hoverEffect} className="flex flex-col gap-5 justify-center items-center bg-white shadow-lg rounded-3xl p-5 w-[90%] lg:w-[350px] border border-gray-200">
            <div className="w-70 h-70 overflow-hidden rounded-xl">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-xl font-semibold text-gray-800">{title}</div>
            <div className="text-center text-gray-600">{description}</div>
        </motion.div>
    );
};

export default ServiceCard;