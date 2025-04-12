import React from "react";
import { Factory, Recycle, Handshake, Boxes } from "lucide-react"; // Swap icons for better domain fit
import { Card } from "../../components/ui/Card";
import ResourcesBarChart from "../../components/ui/ResourcesBarChart";

const OverviewTwo = () => {
    const stats = [
        {
            icon: <Factory className="h-7 w-7 text-indigo-600" />,
            label: "Suppliers Connected",
            value: "128",
        },
        {
            icon: <Boxes className="h-7 w-7 text-amber-600" />,
            label: "Available Resources",
            value: "9,473",
        },
        {
            icon: <Recycle className="h-7 w-7 text-green-600" />,
            label: "Items Recycled",
            value: "2,341",
        },
        {
            icon: <Handshake className="h-7 w-7 text-cyan-600" />,
            label: "Successful Matches",
            value: "786",
        },
    ];

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Resource Sharing Dashboard</h1>

            {/* Icon Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center p-6 bg-white shadow-md rounded-2xl border border-gray-100 space-x-5"
                    >
                        <div className="p-3 bg-gray-100 rounded-full shadow-sm">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-800">{item.value}</p>
                            <p className="text-sm text-gray-500">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ResourcesBarChart/>
        </div>
    );
};

export default OverviewTwo;
