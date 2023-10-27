import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const root = import.meta.env.BASE_URL;

  return (
    <>
      <header className="flex justify-between items-center p-0 ">
        <div className="px-3">
          <h1 className="text-xl">Blog Name</h1>
        </div>
        <nav className="my-2 flex max-w-7xl bg-gradient-to-r from-blue-300 to-indigo-600 items-center rounded-full">
          <div className="m-[2px] hidden lg:flex lg:gap-x-10 px-1 bg-white rounded-full shadow-md">
            <Link to={`${root}about`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">Start here</Link>
            <Link to={`${root}best`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">My favourites</Link>
            <Link to={`${root}all`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">All posts</Link>
          </div>
        </nav>
        <div></div>
      </header>
      <main>
        <div>Test text here</div>
      </main>
    </>
  )
}

export default Home