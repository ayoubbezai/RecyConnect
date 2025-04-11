import React from 'react';
import useItems from "../../hooks/useItems";

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

    // Handle search change
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Handle category change
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    // Handle location change
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    // Handle start price change
    const handleStartPriceChange = (e) => {
        setStartPrice(e.target.value);
    };

    // Handle end price change
    const handleEndPriceChange = (e) => {
        setEndPrice(e.target.value);
    };

    // Handle next page click
    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    // Handle previous page click
    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    return (
        <div>
            <h1>Items List</h1>

            <div>
                <input
                    type="text"
                    onChange={handleSearchChange}
                    placeholder="Search items..."
                />
                <input
                    type="text"
                    onChange={handleCategoryChange}
                    placeholder="Category..."
                />
                <input
                    type="text"
                    onChange={handleLocationChange}
                    placeholder="Location..."
                />
                <input
                    type="number"
                    onChange={handleStartPriceChange}
                    placeholder="Start Price..."
                />
                <input
                    type="number"
                    onChange={handleEndPriceChange}
                    placeholder="End Price..."
                />
            </div>

            {/* Loading indicator */}
            {loading && <p>Loading...</p>}

            {/* Error message */}
            {error && <p>Error: {error}</p>}

            {/* Display items */}
            <ul>
                {items.length === 0 ? (
                    <li>No items found.</li>
                ) : (
                    items.map((item) => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p><strong>Category:</strong> {item.category}</p>
                            <p><strong>Location:</strong> {item.location}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                            <p><strong>Status:</strong> {item.status}</p>
                            <p><strong>Comments:</strong></p>
                            <ul>
                                {item.comments && item.comments.length > 0 ? (
                                    item.comments.map((comment, index) => (
                                        <li key={index}>{comment.content}</li>
                                    ))
                                ) : (
                                    <li>No comments available</li>
                                )}
                            </ul>
                            <p><strong>Created at:</strong> {new Date(item.created_at).toLocaleString()}</p>
                            <p><strong>Expiry date:</strong> {new Date(item.expiry_date).toLocaleString()}</p>
                        </li>
                    ))
                )}
            </ul>

            {/* Pagination controls */}
            <div>
                <button
                    onClick={handlePrevPage}
                    disabled={loading || items.length === 0 || pagination.currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={loading || items.length === 0 || pagination.isLastPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Items;
