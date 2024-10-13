import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import extractFrontMatter from '../helpers/extractFrontMatter';
import { DataContext } from '../context/dataContext';

function Home() {
  // attempt to fetch preferred language(s) from browser and add fallback of 'en-GB'
  const locale = navigator.languages.length ? [...navigator.languages, 'en-GB'] : [navigator.language, 'en-GB'];
  // Header
  // phot/welcome message
  // recent posts
  // categories
  // footer

  const { recentPosts } = useContext(DataContext);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-nowrap">
      <Header />
      <main className="block text-gray-800 bg-background mt-[5rem] flex-grow leading-8">
        <section className="bg-primary border-none pt-4 pb-10 px-8">
          <hr className="border-gray-800 w-full mb-10 mx-auto"/>
          <div className="text-center lg:w-1/2 lg:mx-auto lg:px-10 lg:mt-10">
            <h1 className="font-bold text-xl mb-3 lg:text-2xl">Welcome</h1>
            <p>
              This is *blogname*. And we're not here to mess around. We don't know what we're here for yet, but this will be an exciting blog and the description goes here. Awesome!
            </p>
          </div>
        </section>
        <section className="text-gray-800">
          <div key="dividerTop1" className="overflow-hidden w-full h-[54px] rotate-180 border-none">
            <svg className="block w-full h-[56px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="fill-primary"></path>
            </svg>
          </div>
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            {/* <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
              <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                <span className="text-xs text-gray-400">February 19, 2021</span>
                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
              </div>
            </a> */}
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((recentPost, i) => {
                const urlPathTitle = encodeURIComponent(recentPost.filename);
                const date = new Date(recentPost.date).toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'short', year: '2-digit' });
                return (
                  <React.Fragment key={i}>
                    <Link to={`/post/${urlPathTitle}`} key={i}>
                      <div className="group relative block max-w-sm mx-auto rounded bg-background before:absolute before:inset-0 before:rounded before:border-2 before:border-dashed before:border-gray-900 before:group-active:hidden">
                        <div className="rounded border-2 border-gray-900 bg-primary shadow-md duration-150 group-hover:translate-x-[-5px] group-hover:translate-y-[-3px] group-hover:no-underline group-active:translate-x-[2px] group-active:translate-y-[1px]">
                          {recentPost.imgUrl && (
                            // <img role="presentation" className="object-cover w-full rounded-t-sm h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                            <img role="presentation" loading="lazy" className="object-cover w-full rounded-t-sm h-44 bg-gray-500" src={`/img/${recentPost.imgUrl}`} />
                          )}
                            <div className="p-6 space-y-2">
                              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{recentPost.title}</h3>
                              <span className="text-xs text-gray-400">{date}</span>
                              <p className="text-sm">{recentPost.description}</p>
                            </div>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
            {/* <div className="flex justify-center">
              <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-cool">Load more posts...</button>
            </div> */}
          </div>
          <div className="overflow-hidden w-full h-[54px] rotate-180 border-none">
            <svg className="block w-full h-[56px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="fill-brunswick"></path>
            </svg>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  )
}

export default Home