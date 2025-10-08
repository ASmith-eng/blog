import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/dataContext';
import { FadeInOut } from '../utils/FadeInOut';

const DropdownNav = ({categories, showFavourites}) => {
  const [show, setShow] = useState(false);

  return (
    <>
        <div className="relative cursor-pointer z-10" onClick={()=>{setShow(!show)}}>
          {show ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>
        <FadeInOut show={show} preventBodyScroll={true}>
          <div id="navModal" className="absolute bg-zinc-900 text-primary h-screen w-screen top-0 left-0 z-0">
            <nav className="flex flex-col items-center h-screen py-20 gap-10 font-headline text-2xl md:text-xl overflow-auto">
              {showFavourites && (
                  <Link to={'/favourites'} key="favourites" className="block w-full md:w-3/5 p-6 capitalize text-center cursor-pointer md:bg-zinc-800 md:border-2 md:border-transparent lg:hover:border-background">Favourites</Link>
              )}
              {categories?.length > 0 && categories.map((category, i) => {
                return (
                  <Link id={i} key={i} to={`/tag/${encodeURIComponent(category)}`} className="block w-full md:w-3/5 p-6 capitalize text-center cursor-pointer md:bg-zinc-800 md:border-2 md:border-transparent lg:hover:border-background">{category}</Link>
                )
              })}
            </nav>
          </div>
        </FadeInOut>
    </>
  )
};

function Header() {
  const [small, setSmall] = useState(false);

  const { categories } = useContext(DataContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.scrollY > 100));
    }
  }, []);

  const root = import.meta.env.BASE_URL;
  const showFavourites = import.meta.env.VITE_FAVOURITES;

  return (
    <>
      <header className={`${small ? "py-1" : "py-3"} z-40 w-full flex items-center justify-between fixed top-0 bg-primary duration-200 md:py-3`}>
        <div className="px-3 md:px-4">
          <Link to='/'>
            <h1 className={`${small ? "text-xl" : "text-4xl"} duration-200 font-headline md:text-2xl`}>Blog Name</h1>
          </Link>
        </div>
        <div className="my-2 md:mx-0 md:col-span-2 flex">
          <div className="mx-3 md:px-4">
            <div className="">
              <DropdownNav categories={categories} showFavourites={showFavourites} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header