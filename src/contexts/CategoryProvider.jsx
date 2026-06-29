import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CategoryContext = createContext();
function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [update, setUpdate] = useState(false);

    // use luu id xoa
    useEffect(() => {
        getData();
    }, [update]);

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const getData = async () => {
        const reponse = await axios.get("https://6a34ec468248ee962fa5cefb.mockapi.io/Categories");
        setCategories(reponse.data);
    }
    return (
        <CategoryContext.Provider value={{ categories, handleUpdate }}>
            {children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;