import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [showNav, setShowNav] = useState(false);

  const root = import.meta.env.BASE_URL;

  const DropdownNav = ({show}) => {

    return (
      <>
        <div className="relative cursor-pointer" onClick={()=>{setShowNav(!showNav)}}>
          {show ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>
        {show ? (
            <nav className="absolute right-2 my-2 p-2 pr-40 bg-white border-2 border-slate-500 rounded-xl">
              <Link to={`${root}about`} className="block my-2 text-lg">Start here</Link>
              <Link to={`${root}best`} className="block my-2 text-lg">My favourites</Link>
              <Link to={`${root}all`} className="block my-2 text-lg">All posts</Link>
            </nav>
        ) : null}
      </>
    )
  };

  return (
    <>
      <header className="flex items-center justify-between md:grid md:grid-cols-4 md:gap-3 px-0 py-1 md:p-0">
        <div className="px-3 md:px-4">
          <h1 className="text-4xl md:text-2xl">Blog Name</h1>
        </div>
        <div className="my-2 mx-2 md:mx-0 md:col-span-2 flex">
          <div className="md:mx-auto md:max-w-7xl bg-gradient-to-r from-blue-300 to-indigo-600 items-center rounded-full">
            <div className="m-[2px] px-1 bg-white rounded-full shadow-md">
              <div className="md:hidden">
                <DropdownNav show={showNav} />
              </div>
              <nav className="justify-center hidden md:flex">
                <Link to={`${root}about`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">Start here</Link>
                <Link to={`${root}best`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">My favourites</Link>
                <Link to={`${root}all`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">All posts</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>Test text here</div>
      </main>
    </>
  )
}

export default Home