import React from "react";

const ContactUsCard = ({ icon, text, subText }) => {
    return (
        <div className="flex gap-4">
            <div className="bg-secondary rounded-full p-2">{icon}</div>
            <div>
                <h2 className="text-xl font-bold text-secondary">{text}</h2>
                <p className="text-sm text-secondary">{subText}</p>
            </div>
        </div>
    );
};

export default ContactUsCard;