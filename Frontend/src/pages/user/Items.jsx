import React from 'react';
import useItems from "../../hooks/useItems";
import SideBar from '../../components/layout/SideBar';

const className = "p-2 border border-gray-300 rounded-lg w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs";
const Items = () => {
    const {
        items,
        loading,
        error,
        setPage,
        setSearch,
        setCategory,
        setLocation,
        setStartPrice,
        setEndPrice,
        pagination
    } = useItems();

    // Handlers
    const handleSearchChange = (e) => setSearch(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleStartPriceChange = (e) => setStartPrice(e.target.value);
    const handleEndPriceChange = (e) => setEndPrice(e.target.value);
    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePrevPage = () => setPage((prevPage) => prevPage - 1);

    return (
        <div className='flex'>
            <SideBar />
            <div className="max-w-6xl bg-gray-50 h-screen overflow-y-auto mx-auto p-6 flex-1">
                <h1 className="text-3xl font-bold mb-6">Items List</h1>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    <input type="text" onChange={handleSearchChange} placeholder="Search items..." className={className} />
                    <input type="text" onChange={handleCategoryChange} placeholder="Category..."  className={className}/>
                    <input type="text" onChange={handleLocationChange} placeholder="Location..."  className={className} />
                    <input type="number" onChange={handleStartPriceChange} placeholder="Start Price..." className={className} />
                    <input type="number" onChange={handleEndPriceChange} placeholder="End Price..."  className={className} />
                </div>

                {/* Loading & Error */}
                {loading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}

                {/* Items List */}
                <ul className="space-y-6">
                    {items.length === 0 ? (
                        <li className="text-gray-500">No items found.</li>
                    ) : (
                        items.map((item) => (
                            <li key={item.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p><span className="font-medium">Category:</span> {item.category}</p>
                                <p><span className="font-medium">Location:</span> {item.location}</p>
                                <p><span className="font-medium">Price:</span> ${item.price}</p>
                                <p><span className="font-medium">Status:</span> {item.status}</p>
                                <p className="mt-2 font-medium">Comments:</p>
                                <ul className="list-disc pl-5 text-sm text-gray-700">
                                    {item.comments && item.comments.length > 0 ? (
                                        item.comments.map((comment, index) => (
                                            <li key={index}>{comment.content}</li>
                                        ))
                                    ) : (
                                        <li>No comments available</li>
                                    )}
                                </ul>
                                <p className="text-sm text-gray-500 mt-2">Created: {new Date(item.created_at).toLocaleString()}</p>
                                <p className="text-sm text-gray-500">Expires: {new Date(item.expiry_date).toLocaleString()}</p>
                            </li>
                        ))
                    )}
                </ul>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-8">
                    <button
                        onClick={handlePrevPage}
                        disabled={loading || items.length === 0 || pagination.currentPage === 1}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={loading || items.length === 0 || pagination.total_pages}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Items;
