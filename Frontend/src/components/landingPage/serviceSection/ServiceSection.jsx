import React from "react";
import ServiceCard from "./ServiceCard";
import ryc from "../../../assets/images/services/ryc.webp";
import ryc2 from "../../../assets/images/services/ryc2.webp";
import ryc3 from "../../../assets/images/services/ryc3.webp";
import { motion } from "framer-motion";
import { slideIn, slideInPar } from "../../../animations";
const ServicesSection = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center mt-20 mb-20 w-[90%] lg:w-[80%] mx-auto">
            <motion.div {...slideIn} className="text-4xl font-display font-bold">Our Services</motion.div>
            <motion.div {...slideIn} className="text-2xl text-center ">
                We offer a range of solutions to support your business needs
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center font-display">
                <ServiceCard
                    img={ryc}
                    title="RecyConnect"
                    description="A digital platform connecting people with local recycling services, helping communities manage waste and protect the environment efficiently and sustainably."
                />
                <ServiceCard
                    img={ryc2}
                    title="Packaging Solutions"
                    description="We provide innovative, eco-friendly packaging services designed to reduce waste while enhancing product safety, branding, and customer satisfaction everywhere."
                />
                <ServiceCard
                    img={ryc3}
                    title="Linden Honey"
                    description="Our organic linden honey is harvested naturally, offering rich flavor and essential nutrients with sustainable methods that support local beekeeping practices."
                />
            </div>
        </div>
    );
};

export default ServicesSection;