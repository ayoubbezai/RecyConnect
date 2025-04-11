import React from "react";
import FooterCard from "./FooterCard";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
    faInstagram,
    faFacebook,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slideIn, slideInPar } from "../../../animations";
import { motion } from "framer-motion";
const Footer = () => {
    const Navigate = useNavigate();
    const privacyPolicy = () => {
        Navigate("/Privacy-Policy");
    };

    return (
        <footer>
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center  p-10 bg-secondary text-background">
                <div className="flex lg:flex-row flex-col lg:mr-100  lg:gap-100 w-[90%] lg:w-[40%] md:w-[40%]">
                    <div>
                        {" "}
                        <motion.h1
                            {...slideIn}
                            className="text-left flex flex-col text-2xl font-bold text-background p-4 "
                        >
                            About the company
                        </motion.h1>
                        <motion.p
                            {...slideIn}
                            className="text-left text- p-4 lg:w-150 w-[90%]"
                        >
                            We’re Algeria’s first B2B marketplace for exchanging surplus
                            stock, unused materials, and industrial assets. Our platform helps
                            businesses save money, reduce waste, and strengthen the local
                            industrial ecosystem through smart, sustainable trade.
                        </motion.p>
                    </div>

                    <motion.div
                        {...slideIn}
                        className="flex  lg:flex-col flex-row lg:gap-2 gap-8 items-center justify-start p-4"
                    >
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </motion.div>
                </div>
            </div>
            <div className="bg-secondary text-background p-4 text-center -mt-10">
                <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                <p onClick={privacyPolicy} className=" cursor-pointer hover:underline">
                    Privacy Policy | Terms of Service
                </p>
            </div>
        </footer>
    );
};

export default Footer;