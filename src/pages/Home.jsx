import React, { useState, useEffect, useContext } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import extractFrontMatter from '../helpers/extractFrontMatter';
import { CategoriesContext } from '../context/categoriesContext';

function Home() {
  // Header
  // phot/welcome message
  // recent posts
  // categories
  // footer

  const { categories } = useContext(CategoriesContext);

  console.log(categories);
  return (
    <>
      <Header />
      <main>
        {categories.map((category) => {
          return (
            <h2>{category}</h2>
          )
        })}
      </main>
    </>
  )
}

export default Home