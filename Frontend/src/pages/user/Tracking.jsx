import React, { useState, useEffect } from 'react';
import { trackingService } from '../../services/trackingService';

const Tracking = () => {
    const [trackingItems, setTrackingItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchTrackingData = async () => {
        try {
            const data = await trackingService.getData();
            if (!data || data.length === 0) {
                setError('No tracking information found');
                setTrackingItems([]);
            } else {
                setTrackingItems(data.data || data);
                setError(null);
            }
        } catch (err) {
            setError('Failed to load tracking information');
            console.error('Tracking data fetch error:', err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchTrackingData();
    };

    useEffect(() => {
        fetchTrackingData();
    }, []);

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Tracking Information</h2>
                <button
                    onClick={handleRefresh}
                    disabled={refreshing}
                    className={`px-4 py-2 rounded-md ${refreshing ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
                >
                    {refreshing ? 'Refreshing...' : 'Refresh'}
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-12">
                    <p className="text-gray-600">Loading tracking information...</p>
                </div>
            ) : error ? (
                <p className="p-4 text-red-600 bg-red-50 rounded-md text-center">{error}</p>
            ) : (
                <div className="space-y-4">
                    {Array.isArray(trackingItems) && trackingItems.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.type === 'purchase'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                    {item.type.toUpperCase()}
                                </span>
                                <span className="font-medium text-gray-700">
                                    Tracking #: {item.tracking}
                                </span>
                            </div>
                            <div className="py-3 space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Price:</span>
                                    <span className="text-gray-800">${(item.price / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Order Date:</span>
                                    <span className="text-gray-800">{formatDate(item.created_at)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Last Updated:</span>
                                    <span className="text-gray-800">{formatDate(item.updated_at)}</span>
                                </div>
                            </div>
                            <div className="flex space-x-3 pt-2">
                                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                                    Track Package
                                </button>
                                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Tracking;