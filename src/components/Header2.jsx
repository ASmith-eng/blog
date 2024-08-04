import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/dataContext';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [small, setSmall] = useState(false);

  const { categories } = useContext(DataContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.scrollY > 100));
    }
  }, []);

  const root = import.meta.env.BASE_URL;
  const showFavourites = import.meta.env.VITE_FAVOURITES;

  const DropdownNav = ({show}) => {

    return (
      <>
          <div className="relative cursor-pointer" onClick={()=>{setShowNav(!showNav)}}>
            {show ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </div>
          {show ? (
          <div className="absolute h-screen w-screen top-0 left-0" onClick={() => {setShowNav(false)}}>
              <div className="absolute top-16 right-0 w-4/5">
                <nav className="p-1 bg-background shadow-md rounded-l">
                  {showFavourites && (
                    <Link to={'/favourites'} className="">Favourites</Link>
                  )}
                  {categories?.length>0 && categories.map((category, i) => {
                    return (
                      <Link id={i} to={`/tag/${encodeURIComponent(category)}`} className="block text-lg m-4 capitalize cursor-pointer">{category}</Link>
                    )
                  })}
                </nav>
              </div>
          </div>
          ) : null}
      </>
    )
  };

  return (
    <>
      <header className={`${small ? "py-1" : "py-3"} z-40 w-full flex items-center justify-between fixed top-0 bg-primary duration-200 md:py-3`}>
        <div className="px-3 md:px-4">
          <h1 className={`${small ? "text-xl" : "text-4xl"} duration-200 md:text-2xl`}>Blog Name</h1>
        </div>
        <div className="my-2 md:mx-0 md:col-span-2 flex">
          <div className="mx-3 md:px-4">
            <div className="">
              <DropdownNav show={showNav} />
            </div>
            {/* <nav className="justify-center hidden md:flex">
              <Link to={`${root}about`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">Start here</Link>
              <Link to={`${root}best`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">My favourites</Link>
              <Link to={`${root}all`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">All posts</Link>
            </nav> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header