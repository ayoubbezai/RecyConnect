import React from "react";
import ContactUsCard from "./ContactUsCard";
import { motion } from "framer-motion";
import { slideInPar, slideIn } from "../../../animations";
import { Mail, Phone, MapPin } from "lucide-react";
const ContactUsSection = () => {
    return (
        <div className="">
            <motion.div {...slideIn} className="text-4xl font-display font-bold text-center">Contact Us</motion.div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-40 gap-10 ">
                <div className="flex flex-col gap-10 justify-center items-center mt-15 lg:mb-20 mb-0 w-[90%] lg:w-[20%] border-2 p-10 rounded-3xl border-secondary">
                    <input
                        className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5"
                        type="text"
                        placeholder="Email"
                    />
                    <textarea
                        className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5"
                        type="text"
                        placeholder="Message"
                    />
                    <button className="border-1 bg-secondary text-background  border-background hover:border-primary text-2xl pt- rounded-[10px] cursor-pointer w-30">
                        Submit
                    </button>
                </div>

                <div className="flex flex-col lg:gap-20 gap-10 justify-center p-4 text-secondary mb-10">
                    <motion.div {...slideInPar(0.9)}>
                        <ContactUsCard
                            icon={<Mail size={30} color="white" />}
                            text="Email"
                            subText="izadev99@gmail.com"
                        />
                    </motion.div>
                    <motion.div {...slideInPar(0.6)}>
                        <ContactUsCard
                            icon={<Phone size={30} color="white" />}
                            text="Phone"
                            subText="0999999999"
                        />
                    </motion.div>

                    <motion.div {...slideInPar(0.3)}>
                        <ContactUsCard
                            icon={<MapPin size={30} color="white" />}
                            text="Address"
                            subText="123 Main St, Batna, Algeria"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;