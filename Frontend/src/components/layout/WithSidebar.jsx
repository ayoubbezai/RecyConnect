// layouts/WithSidebar.jsx
import React from 'react';
import Sidebar from "../layout/SideBar"

const WithSidebar = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="max-w-6xl bg-gray-50 h-screen overflow-y-auto mx-auto p-6 flex-1">
                {children}
            </div>
        </div>
    );
};

export default WithSidebar;