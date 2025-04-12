import React from 'react'



export const Card = ({ title, description, children, className, ...props }) => {
    return (
        <div
            className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 py-10 ${className}`}
            {...props}
        >
            {title && <h3 className="font-semibold text-lg">{title}</h3>}
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
            <div className="mt-4">
                {children}
            </div>
        </div>
    );
};