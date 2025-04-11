import { useState, useEffect } from 'react';
import { itemsServices } from "../services/itemsServices";

const useItems = (IsYours=false) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [startPrice, setStartPrice] = useState('');
    const [endPrice, setEndPrice] = useState('');
    const [pagination, setPagination] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            setError(null);

            const result = await itemsServices.getAllItems(page, search, category, location, startPrice, endPrice, IsYours);
            console.log(result)

            if (result.success) {
                setItems(result.data);  
                setPagination(result.pagination);  
            } else {
                setError(result.message);  
            }

            setLoading(false);
        };

        fetchItems();  
    }, [page, search, category, location, startPrice, endPrice,IsYours]);  

    return {
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
    };
};

export default useItems;
