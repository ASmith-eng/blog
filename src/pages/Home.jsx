import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const root = import.meta.env.BASE_URL;

  return (
    <>
      <header>
        <nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-8">
          <div className="mx-auto hidden lg:flex lg:gap-x-10 px-1 border-2 border-indigo-500 rounded-3xl shadow-md">
            <Link to={`${root}about`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">Start here</Link>
            <Link to={`${root}best`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">My favourites</Link>
            <Link to={`${root}all`} className="m-1 p-2 font-bold rounded-2xl hover:bg-slate-200">All posts</Link>
          </div>
        </nav>
      </header>
      <main>
        <div>Test text here</div>
      </main>
    </>
  )
}

export default Home