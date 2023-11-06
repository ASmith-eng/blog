import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [showNav, setShowNav] = useState(false);

  const root = import.meta.env.BASE_URL;

  const DropdownNav = ({show}) => {

    return (
      <>
        <div className="relative cursor-pointer" onClick={()=>{setShowNav(!showNav)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        {show ? (
            <nav className="absolute container right-2 bg-blue-500">
              <Link to={`${root}about`} className="block mx-auto">Start here</Link>
              <Link to={`${root}best`} className="block mx-auto">My favourites</Link>
              <Link to={`${root}all`} className="block mx-auto">All posts</Link>
            </nav>
        ) : null}
      </>
    )
  };

  return (
    <>
      <header className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:gap-3 p-0 ">
        <div className="px-3">
          <h1 className="text-xl">Blog Name</h1>
        </div>
        <div className="my-2 mx-2 lg:mx-0 lg:max-w-7xl bg-gradient-to-r from-blue-300 to-indigo-600 items-center rounded-full">
          <div className="m-[2px] px-1 bg-white rounded-full shadow-md">
            <div className="lg:hidden">
              <DropdownNav show={showNav} />
            </div>
            <nav className="justify-center hidden lg:flex lg:gap-x-8">
              <Link to={`${root}about`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">Start here</Link>
              <Link to={`${root}best`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">My favourites</Link>
              <Link to={`${root}all`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">All posts</Link>
            </nav>
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