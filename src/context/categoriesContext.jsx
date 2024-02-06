import React, { useState, useEffect, createContext } from 'react';
import fetchData from '../helpers/fetchData';

export const CategoriesContext = createContext();

export default function CategoriesProvider({children}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {await fetchData('postCategories.json', setCategories)};
        fetchCategories();
    }, []);

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    const values = {
        categories
    };

    return (
        <CategoriesContext.Provider value={values}>
            {children}
        </CategoriesContext.Provider>
    )
}