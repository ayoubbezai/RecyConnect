import React from "react";

const FooterCard = ({ icon, text, subText }) => {
    return (
        <div className="flex gap-4">
            <div className="bg-background rounded-full p-2">{icon}</div>
            <div>
                <h2 className="text-xl font-bold text-background">{text}</h2>
                <p className="text-sm text-background">{subText}</p>
            </div>
        </div>
    );
};

export default FooterCard;