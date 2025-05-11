import React, { useState, useEffect, createContext } from 'react';
import fetchData from '../utils/fetchData';

export const DataContext = createContext();

export default function DataProvider({children}) {
    // const [manifest, setManifest] = useState({});
    const [categories, setCategories] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);

    const [postFilenames, setPostFileNames] = useState([]);

    const configureFrontEnd = async () => {
        const parallelFetchArray = [
            fetchData('allPosts.json', setAllPosts),
            fetchData('recentPosts.json', setRecentPosts)
        ];
        
        if (import.meta.env.VITE_POSTLIST_FORMAT === 'categories') {
            parallelFetchArray.push(fetchData('postCategories.json', setCategories));
        }

        await Promise.allSettled(parallelFetchArray);
    }

    useEffect(() => {
        configureFrontEnd();
    }, []);

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