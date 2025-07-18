// hooks/useFetchProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (filters, gender) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const query = new URLSearchParams();

                Object.entries(filters).forEach(([key, values]) => {
                    values.forEach(value => query.append(key, value));
                });

                // Добавим пол (если w = women / m = men) как дополнительный фильтр
                if (gender === 'w') query.append('gender', 'woman');
                if (gender === 'm') query.append('gender', 'man');

                const res = await axios.get(`/api/products/GetProducts?${query}`);
                setProducts(res.data);
            } catch (err) {
                console.error('Ошибка при получении продуктов:', err);
                setProducts([]);
            }
        };

        fetch();
    }, [filters, gender]);

    return products;
};

export default useFetchProducts;
