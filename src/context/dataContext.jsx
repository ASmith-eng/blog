import React, { useState, useEffect, createContext } from 'react';
import fetchData from '../helpers/fetchData';

export const DataContext = createContext();

export default function DataProvider({children}) {
    const [manifest, setManifest] = useState({});
    const [categories, setCategories] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);

    const [postFilenames, setPostFileNames] = useState([]);

    const configureFrontEnd = async () => {
        if (import.meta.env.VITE_POSTLIST_FORMAT === 'categories') {
            await fetchData('postCategories.json', setCategories)
        }
        await fetchData('allPosts.json', setAllPosts);
        await fetchData('recentPosts.json', setRecentPosts);
    }

    useEffect(() => {
        configureFrontEnd();
    }, []);

    useEffect(() => {
        console.log("categories, allPosts, and recentPosts");
        console.log(categories);
        console.log(allPosts);
        console.log(recentPosts);
    }, [recentPosts]);

    useEffect(() => {
        setPostFileNames(allPosts.map((post) => post.filename));
    }, [allPosts]);
    
    const values = {
        categories,
        allPosts,
        postFilenames,
        recentPosts
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}