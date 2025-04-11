import React from "react";
import { Heart, MessageCircle } from "lucide-react";

const PostCard = ({
    location,
    ItemImage,
    category,
    likes,
    comments,
    createdDate,
    expiryDate,
    status,
    price,
}) => {
    return (
        <div className="max-w-sm rounded-3xl shadow-lg bg-white overflow-hidden border border-gray-200 w-300">
            <div className="p-4">
                <div className="flex items-center space-x-3">
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg">{category}</h3>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                </div>
                <img
                    className="w-full h-80 object-cover p-5 rounded-3xl"
                    src={ItemImage}
                    alt={category}
                />
                <div className="my-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                            Created date: {createdDate}
                        </span>
                        <span
                            className={`px-2 py-1 text-xs rounded-full ${status === "active"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            {status}
                        </span>
                    </div>

                    <div className="mt-2 text-xl font-bold text-gray-800">{price}</div>
                </div>

                <div className="flex justify-between items-center mt-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span>{likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                        <span>{comments}</span>
                    </div>
                </div>

                <div className="mt-3 flex justify-between text-sm text-gray-500">
                    <span>Expiry date: {expiryDate}</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
