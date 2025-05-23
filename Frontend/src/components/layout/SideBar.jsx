import React, { useState } from 'react';
import {
    MdMenu,
    MdMenuOpen,
    MdLogout,
    MdDashboard,
    MdList,
    MdPeople,
    MdChat,
    MdOutlineDescription,
    MdHistory,
    MdAccountCircle
    
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoutClick=() => {
        localStorage.removeItem("authToken")
        navigate("/login");
    }
    // Color variables
    const primaryColor = '#2EC4B6';
    const lightColor = '#F5FDFC';
    const accentColor = '#D6F5F2';
    const textColor = '#1A3A36';
    const sidebarLinks = [
        { label: 'Overview', icon: <MdDashboard size={20} />, path: '/overview' },
        { label: 'Post List', icon: <MdList size={20} />, path: '/items' },
        { label: 'Tracking', icon: <MdChat size={20} />, path: '/tracking' },
        { label: 'Record', icon: <MdHistory size={20} />, path: '/record' },
        { label: 'Profile', icon: <MdPeople size={20} />, path: '/our_items' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div
            className={`${isOpen ? 'w-52' : 'w-16'} min-h-screen flex flex-col justify-between transition-all  duration-300 max-h-screen`}
            style={{ backgroundColor: 'white', borderRight: '1px solid #E5F5F3' }}
        >
            {/* Header */}
            <div className="relative flex flex-col items-center pt-4 px-3">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-2 right-2 p-2 rounded-full transition hover:bg-gray-100"
                    style={{ color: primaryColor }}
                >
                    {isOpen ? <MdMenuOpen size={20} /> : <MdMenu size={20} />}
                </button>

                <div className="mt-8 mb-4 flex flex-col items-center">
                    <div
                        className="w-10 h-10 rounded-full mb-1 flex items-center justify-center"
                        style={{ backgroundColor: lightColor, color: primaryColor }}
                    >
                        <MdOutlineDescription size={20} />
                    </div>
                    {isOpen && <h1 className="text-sm font-semibold" style={{ color: textColor }}>Item Tracker</h1>}
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
                                        ? 'font-medium'
                                        : 'text-gray-600 hover:bg-gray-50'}
                                `}
                                style={{
                                    backgroundColor: isActive(link.path) ? accentColor : 'transparent',
                                    color: isActive(link.path) ? textColor : 'inherit'
                                }}
                            >
                                <span style={{ color: isActive(link.path) ? primaryColor : '#7A8C89' }}>
                                    {link.icon}
                                </span>
                                {isOpen && <span>{link.label}</span>}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Logout */}
            <div className="mb-4 text-center px-2">
                {isOpen ? (
                    <button
                        className="w-full flex items-center justify-center gap-2 py-1.5 rounded text-sm transition border hover:bg-gray-50"
                        style={{
                            color: textColor,
                            borderColor: accentColor
                        }}
                        onClick={()=>handleLogoutClick()}
                    >
                        <MdLogout size={18} style={{ color: primaryColor }} />
                        Logout
                    </button>
                ) : (
                    <button
                        className="p-2 rounded-full transition hover:bg-gray-100"
                        style={{ color: primaryColor }}
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