import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { category: "Food", amount: 1240 },
    { category: "Textiles", amount: 860 },
    { category: "Electronics", amount: 540 },
    { category: "Furniture", amount: 320 },
    { category: "Medical", amount: 230 },
    { category: "Packaging", amount: 410 },
    { category: "Stationery", amount: 365 },
    { category: "Plastic Goods", amount: 190 },
];

const ResourcesBarChart = () => {
    return (
        <div className="bg-white p-6 w-full mx-auto rounded-2xl shadow-md mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Shared Resources by Category
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#2EC4B6" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResourcesBarChart;
