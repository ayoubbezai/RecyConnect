import React, { useState } from 'react';
import {
    MdMenu,
    MdMenuOpen,
    MdLogout,
    MdDashboard,
    MdList,
    MdPeople,
    MdChat
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const sidebarLinks = [
        { label: 'Overview', icon: <MdDashboard size={20} />, path: '/overview' },
        { label: 'Post List', icon: <MdList size={20} />, path: '/posts' },
        { label: 'Our List', icon: <MdPeople size={20} />, path: '/our-list' },
        { label: 'Chat', icon: <MdChat size={20} />, path: '/chat' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className={`${isOpen ? 'w-52' : 'w-16'} bg-white min-h-screen flex flex-col justify-between shadow-lg transition-all duration-300 border-r border-gray-200 max-h-screen`}>
            {/* Header */}
            <div className="relative flex flex-col items-center pt-4 px-3">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
                >
                    {isOpen ? <MdMenuOpen size={20} /> : <MdMenu size={20} />}
                </button>

                <div className="mt-8 mb-4 flex flex-col items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mb-1 shadow-inner" />
                    {isOpen && <h1 className="text-sm font-semibold text-gray-700">My App</h1>}
                </div>

                {/* Links */}
                <nav className="w-full mt-2">
                    <ul className="flex flex-col gap-1">
                        {sidebarLinks.map((link, idx) => (
                            <Link
                                to={link.path}
                                key={idx}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition cursor-pointer 
                                    ${isActive(link.path)
                                        ? 'bg-blue-100 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}
                                `}
                            >
                                {link.icon}
                                {isOpen && <span>{link.label}</span>}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Logout */}
            <div className="mb-4 text-center px-2">
                {isOpen ? (
                    <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-1.5 rounded hover:bg-red-600 text-sm transition">
                        <MdLogout size={18} />
                        Logout
                    </button>
                ) : (
                    <button
                        className="text-red-500 hover:bg-red-100 p-2 rounded-full transition"
                        title="Logout"
                    >
                        <MdLogout size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SideBar;
