import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemsServices } from '../../services/itemsServices';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleGetItem = async (id) => {
        try {
            setLoading(true);
            const data = await itemsServices.getPostDetails(id);
            setItem(data?.data);
        } catch (err) {
            setError(err.message || 'Failed to fetch item details');
            console.error('Error fetching item:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            handleGetItem(id);
        }
    }, [id]);

    if (loading) {
        return <div>Loading item details...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="item-details-container">
            <h1>{item.title}</h1>

            <div className="item-image">
                <img
                    src={item.pictures}
                    alt={item.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>

            <div className="item-info">
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Status:</strong> {item.status}</p>
                <p><strong>Expiry Date:</strong> {new Date(item.expiry_date).toLocaleDateString()}</p>
            </div>

            <div className="item-description">
                <h3>Description:</h3>
                <p>{item.content}</p>
            </div>

            <div className="item-comments">
                <h3>Comments ({item?.comments?.length})</h3>
                {item?.comments?.length > 0 ? (
                    <ul>
                        {item.comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments yet</p>
                )}
            </div>

            <div className="item-meta">
                <p>Posted on: {new Date(item.created_at).toLocaleString()}</p>
                {item.updated_at !== item.created_at && (
                    <p>Last updated: {new Date(item.updated_at).toLocaleString()}</p>
                )}
            </div>
        </div>
    );
};

export default ItemDetails;