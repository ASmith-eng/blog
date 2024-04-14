import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header2';
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
      <Header />
      <main>
        <section>

        </section>
        <section className="bg-pink-100 text-gray-800">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            {/* <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
              <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                <span className="text-xs text-gray-400">February 19, 2021</span>
                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
              </div>
            </a> */}
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-green-500">
              {recentPosts.map((recentPost) => {
                const urlPathTitle = encodeURIComponent(recentPost.filename);
                const date = new Date(recentPost.date).toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'short', year: '2-digit' });
                return (
                  <>
                    <Link to={`/post/${urlPathTitle}`} className="max-w-sm mx-auto group rounded-sm bg-pink-200 hover:cursor-pointer hover:shadow-[6px_4px_0px_0px] duration-150 hover:no-underline focus:no-underline active:shadow-none active:translate-x-[4px] active:translate-y-[3px]">
                      <img role="presentation" className="object-cover w-full rounded-t-sm h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                      <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{recentPost.title}</h3>
                        <span className="text-xs text-gray-400">{date}</span>
                        <p>{recentPost.description}</p>
                      </div>
                    </Link>
                  </>
                );
              })}
              {/* <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group rounded-sm bg-pink-200 hover:cursor-pointer hover:shadow-[6px_4px_0px_0px] duration-150 hover:no-underline focus:no-underline active:shadow-none active:translate-x-[4px] active:translate-y-[3px]">
                <img role="presentation" className="object-cover w-full rounded-t-sm h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                  <span className="text-xs text-gray-400">January 21, 2021</span>
                  <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
              </a>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group rounded-sm bg-pink-200 hover:cursor-pointer hover:shadow-[6px_4px_0px_0px] duration-150 hover:no-underline focus:no-underline active:shadow-none active:translate-x-[4px] active:translate-y-[3px]">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                  <span className="text-xs text-gray-400">January 22, 2021</span>
                  <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                </div>
              </a> */}
            </div>
            <div className="flex justify-center">
              <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400">Load more posts...</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home