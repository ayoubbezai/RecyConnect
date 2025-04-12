import React, { useState } from 'react';
import Model from "./Model";
import { itemsServices } from '../services/itemsServices';
import { categories } from '../constant/categories';
import { materialStatus } from '../constant/status';


const selectClassName = "p-2 border border-gray-300 rounded-lg w-full  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs";



const AddItemModel = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        expiry_date: '',
        location: '',
        status: '',
        content: '',
        picture: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmition = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const data = await itemsServices.addItem(
                formData.title,
                formData.category,
                formData.price,
                formData.expiry_date,
                formData.location,
                formData.status,
                formData.content,
                formData.picture
            );

            if (data.success) {
                onClose();
            } else {
                setError(data.message || 'Failed to add item');
            }
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Model isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmition} className="space-y-4">
                <h2 className="text-xl font-bold mb-4">Add New Item</h2>

                {error && <div className="text-red-500 p-2 bg-red-50 rounded">{error}</div>}

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input
                        type="date"
                        name="expiry_date"
                        value={formData.expiry_date}
                        onChange={handleChange}
                        className={selectClassName}
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={selectClassName}
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                    >
                        {materialStatus.map((s, index) => (
                            <option key={index} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                        rows={4}
                    />
                </div>

                <div className="form-group">
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                        type="url"
                        name="picture"
                        value={formData.picture}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        className={selectClassName}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? 'Adding...' : 'Add Item'}
                </button>
            </form>
        </Model>
    );
};

export default AddItemModel;