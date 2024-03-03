import React, { useState, useEffect, createContext } from 'react';
import fetchData from '../helpers/fetchData';

export const DataContext = createContext();

export default function DataProvider({children}) {
    const [manifest, setManifest] = useState({});
    const [categories, setCategories] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);

    const configureFrontEnd = async () => {
        if (import.meta.env.VITE_POSTLIST_FORMAT === 'categories') {
            await fetchData('postCategories.json', setCategories)
        } else if (import.meta.env.VITE_POSTLIST_FORMAT === 'allPosts') {
            await fetchData('allPosts.json', setAllPosts);
        }
        await fetchData('recentPosts.json', setRecentPosts);
    }

    useEffect(() => {
        configureFrontEnd();
    }, []);
    
    const values = {
        categories,
        recentPosts
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}