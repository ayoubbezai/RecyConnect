import React, { useState, useEffect } from 'react';
import { trackingService } from '../../services/trackingService';
import { FiRefreshCw, FiPackage, FiCalendar, FiDollarSign, FiClock, FiExternalLink } from 'react-icons/fi';

const Tracking = () => {
    const primaryColor = '#2EC4B6';
    const lightColor = '#E8F9F7';
    const darkColor = '#1D9C92';
    const textColor = '#0A3A35';

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

    const handleTrackPackage = (trackingNumber) => {
        window.open(`https://tracking-service.com/?tracking=${trackingNumber}`, '_blank');
    };

    const handleViewDetails = (itemId) => {
        // Would typically navigate to details page
        console.log('View details for:', itemId);
    };

    useEffect(() => {
        fetchTrackingData();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#2EC4B6] border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading your tracking information...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Your Orders</h1>
                        <p className="text-gray-500">Track your recent purchases</p>
                    </div>
                    <button
                        onClick={handleRefresh}
                        disabled={refreshing}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${refreshing ? 'bg-gray-200 text-gray-500' : 'bg-white text-[#2EC4B6] hover:bg-gray-100'} border border-gray-200 transition-colors`}
                    >
                        <FiRefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                        <span>{refreshing ? 'Refreshing' : 'Refresh'}</span>
                    </button>
                </div>

                {error ? (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-5">
                        {trackingItems.map((item) => (
                            <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                                <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg ${item.type === 'purchase' ? 'bg-[#E8F9F7] text-[#2EC4B6]' : 'bg-gray-100 text-gray-600'}`}>
                                            <FiPackage className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Order #{item.id}</h3>
                                            <p className="text-sm text-gray-500">Tracking #: {item.tracking}</p>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.type === 'purchase' ? 'bg-[#E8F9F7] text-[#0A3A35]' : 'bg-gray-50 text-gray-700'}`}>
                                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                    </span>
                                </div>
                                <div className="px-5 py-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-2">
                                            <FiDollarSign className="h-4 w-4 text-gray-400" />
                                            <div>
                                                <p className="text-sm text-gray-500">Amount</p>
                                                <p className="font-medium">${(item.price / 100).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <FiCalendar className="h-4 w-4 text-gray-400" />
                                            <div>
                                                <p className="text-sm text-gray-500">Order Date</p>
                                                <p className="font-medium">{formatDate(item.created_at)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <FiClock className="h-4 w-4 text-gray-400" />
                                            <div>
                                                <p className="text-sm text-gray-500">Last Updated</p>
                                                <p className="font-medium">{formatDate(item.updated_at)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="h-4 w-4"></div>
                                            <div>
                                                <p className="text-sm text-gray-500">Status</p>
                                                <p className="font-medium text-green-600">In Transit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-5 py-3 flex justify-end space-x-3">
                                    <button
                                        onClick={() => handleViewDetails(item.id)}
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => handleTrackPackage(item.tracking)}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#2EC4B6] hover:bg-[#1D9C92]"
                                    >
                                        Track Package <FiExternalLink className="ml-1.5 h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tracking;