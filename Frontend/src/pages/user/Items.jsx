import React from 'react';
import useItems from "../../hooks/useItems";
import { FiSearch, FiDollarSign, FiMapPin, FiTag, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        pagination,
    } = useItems();

    // Handlers
    const handleSearchChange = (e) => setSearch(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleStartPriceChange = (e) => setStartPrice(e.target.value);
    const handleEndPriceChange = (e) => setEndPrice(e.target.value);
    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePrevPage = () => setPage((prevPage) => prevPage - 1);

    // Color variations
    const primaryColor = '#2EC4B6';
    const lightColor = '#E8F9F7';
    const darkColor = '#1D9C92';
    const textColor = '#0A3A35';

    return (
        <div className="container mx-auto px-4 py-8" style={{ color: textColor }}>
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>
                    Discover Items
                </h1>
                <p className="opacity-80">Browse through our curated collection</p>
            </div>

            {/* Filters */}
            <div className="p-6 rounded-xl mb-8" style={{ backgroundColor: lightColor }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <FiSearch className="mr-2" /> Search Filters
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="opacity-50" />
                        </div>
                        <input
                            type="text"
                            onChange={handleSearchChange}
                            placeholder="Search items..."
                            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                            style={{ backgroundColor: 'white', focusRingColor: primaryColor }}
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiTag className="opacity-50" />
                        </div>
                        <input
                            type="text"
                            onChange={handleCategoryChange}
                            placeholder="Category"
                            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                            style={{ backgroundColor: 'white', focusRingColor: primaryColor }}
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMapPin className="opacity-50" />
                        </div>
                        <input
                            type="text"
                            onChange={handleLocationChange}
                            placeholder="Location"
                            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                            style={{ backgroundColor: 'white', focusRingColor: primaryColor }}
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiDollarSign className="opacity-50" />
                        </div>
                        <input
                            type="number"
                            onChange={handleStartPriceChange}
                            placeholder="Min price"
                            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                            style={{ backgroundColor: 'white', focusRingColor: primaryColor }}
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiDollarSign className="opacity-50" />
                        </div>
                        <input
                            type="number"
                            onChange={handleEndPriceChange}
                            placeholder="Max price"
                            className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                            style={{ backgroundColor: 'white', focusRingColor: primaryColor }}
                        />
                    </div>
                </div>
            </div>

            {loading && (
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: primaryColor }}></div>
                </div>
            )}

            {error && (
                <div className="p-4 mb-6 rounded border-l-4" style={{ backgroundColor: lightColor, borderColor: darkColor }}>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: darkColor }}>
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm">Error: {error}</p>
                        </div>
                    </div>
                </div>
            )}

            {items.length === 0 && !loading ? (
                <div className="text-center py-12">
                    <svg className="mx-auto h-16 w-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: primaryColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium">No items found</h3>
                    <p className="mt-1 opacity-70">Try adjusting your search filters</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                                <img
                                    src={item.pictures}
                                    alt={item.title}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/300?text=No+Image";
                                    }}
                                />
                                <div className="absolute top-2 right-2 text-xs font-medium px-2.5 py-0.5 rounded-full" style={{ backgroundColor: lightColor, color: darkColor }}>
                                    {item.status}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 truncate text-gray-800">{item.title}</h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8F9F7] text-[#1D9C92]">
                                        <FiTag className="mr-1" /> {item.category}
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8F9F7] text-[#1D9C92]">
                                        <FiMapPin className="mr-1" /> {item.location}
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8F9F7] text-[#1D9C92]">
                                        <FiDollarSign className="mr-1" /> ${item.price}
                                    </span>
                                </div>

                                {/* View Details Button */}
                                <Link
                                    to={`/items/${item.id}`}
                                    className="w-full flex items-center justify-center py-2 px-4 mb-3 rounded-lg transition-all duration-200
               bg-[#2EC4B6] text-white font-medium text-sm
               hover:bg-[#1D9C92] hover:shadow-md
               focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:ring-opacity-50"
                                >
                                    View Full Details
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>

                                <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
                                    <span>Posted: {new Date(item.created_at).toLocaleDateString()}</span>
                                    <span>Expires: {new Date(item.expiry_date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {items.length > 0 && (
                <div className="mt-10 flex items-center justify-between border-t pt-6" style={{ borderColor: lightColor }}>
                    <div className="text-sm">
                        Page <span className="font-medium">{pagination.current_page}</span> of <span className="font-medium">{pagination.total_pages}</span>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={handlePrevPage}
                            disabled={loading || items.length === 0 || pagination.currentPage == 1}
                            className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ borderColor: primaryColor, color: primaryColor }}
                        >
                            <FiChevronLeft className="mr-1" /> Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={loading || items.length === 0 || pagination.currentPage === pagination.total_pages}
                            className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                        >
                            Next <FiChevronRight className="ml-1" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Items;