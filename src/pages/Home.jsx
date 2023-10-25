import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const root = import.meta.env.BASE_URL;

  return (
    <>
      <header>
        <nav>
          <Link to={`${root}about`}>Start here</Link>
          <Link to={`${root}best`}>My favourites</Link>
          <Link to={`${root}all`}>All posts</Link>
        </nav>
      </header>
      <main>
        <div>Test text here</div>
      </main>
    </>
  )
}

export default Home