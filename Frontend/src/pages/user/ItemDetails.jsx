import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemsServices } from '../../services/itemsServices';
import { FiTag, FiMapPin, FiDollarSign, FiMessageSquare } from 'react-icons/fi';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleGetItem = async (id) => {
        try {
            setLoading(true);
            const { data } = await itemsServices.getPostDetails(id);
            setItem({
                ...data,
                comments: Array.isArray(data.comments) ? data.comments : []
            });
        } catch (err) {
            setError(err.message || 'Failed to fetch item details');
            console.error('Error fetching item:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        try {
            setIsSubmitting(true);
            await itemsServices.addComment(id, { content: comment });
            await handleGetItem(id);
            setComment('');
        } catch (err) {
            console.error('Error adding comment:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (id) handleGetItem(id);
    }, [id]);

    if (loading) return <div className="text-center py-8 text-gray-500">Loading...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
    if (!item) return <div className="text-center py-8 text-gray-500">Item not found</div>;

    return (
        <div className="max-w-md mx-auto bg-white p-4">
            {/* Item Header */}
            <div className="flex items-start justify-between mb-3">
                <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    {item.status}
                </span>
            </div>

            {/* Item Image */}
            <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={item.pictures || "https://via.placeholder.com/300?text=No+Image"}
                    alt={item.title}
                    className="w-full h-48 object-contain"
                    onError={(e) => e.target.src = "https://via.placeholder.com/300?text=No+Image"}
                />
            </div>

            {/* Item Meta */}
            <div className="flex gap-2 mb-4 text-sm">
                <span className="flex items-center text-gray-600">
                    <FiTag className="mr-1" /> {item.category || 'N/A'}
                </span>
                <span className="flex items-center text-gray-600">
                    <FiMapPin className="mr-1" /> {item.location || 'N/A'}
                </span>
                <span className="flex items-center font-medium">
                    <FiDollarSign className="mr-1" /> {item.price || '0'}
                </span>
            </div>

            {/* Description */}
            <div className="mb-4">
                <p className="text-gray-700 text-sm">{item.content || 'No description provided'}</p>
            </div>

            {/* Dates */}
            <div className="text-xs text-gray-500 mb-6 flex justify-between">
                <span>Posted: {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}</span>
                <span>Expires: {item.expiry_date ? new Date(item.expiry_date).toLocaleDateString() : 'N/A'}</span>
            </div>

            {/* Comments Section */}
            <div className="border-t pt-4">
                <div className="flex items-center mb-3">
                    <FiMessageSquare className="text-gray-500 mr-2" />
                    <h3 className="font-medium">Comments ({item.comments?.length || 0})</h3>
                </div>

                {/* Comment Form */}
                <form onSubmit={handleAddComment} className="mb-4">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full p-2 border rounded text-sm mb-2"
                        rows="2"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting || !comment.trim()}
                        className="text-sm bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
                    >
                        {isSubmitting ? 'Posting...' : 'Post Comment'}
                    </button>
                </form>

                {/* Comments List */}
                {item.comments && item.comments.length > 0 ? (
                    <div className="space-y-3">
                        {item.comments.map((comment, index) => (
                            <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                                <p>{typeof comment === 'object' ? comment.content : comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-gray-500">No comments yet</p>
                )}
            </div>
        </div>
    );
};

export default ItemDetails;