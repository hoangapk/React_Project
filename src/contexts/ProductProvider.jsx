import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        getData();
    }, [update]);
    const handleUpdate = () => {
        setUpdate(!update);
    }
    const getData = async () => {
        const reponse = await axios.get("https://6a34ec468248ee962fa5cefb.mockapi.io/Products");
        setProducts(reponse.data)
    }
    return (
        <ProductContext.Provider value = {{ products, handleUpdate }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;