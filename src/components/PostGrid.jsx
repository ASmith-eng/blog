import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import { DataContext } from '../context/dataContext';
import { publicPaths } from '../config/paths';

function Home2() {
  // attempt to fetch preferred language(s) from browser and add fallback of 'en-GB'
  const locale = navigator.languages.length ? [...navigator.languages, 'en-GB'] : [navigator.language, 'en-GB'];

  const { recentPosts } = useContext(DataContext);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-nowrap">
        <Header />
        <main className="block text-gray-800 bg-background mt-[5rem] flex-grow leading-8">
          {/* <div className="absolute top-40">
          <div className="border-[1px] border-gray-400 rounded-full px-4 mx-auto filter backdrop-blur-xl bg-gray-400/30">
            Button
          </div>
          </div> */}
          <section className="">
            <div className="">



    <div className="bg-gray-50 py-2 text-accent sm:py-2">
      <div className="mx-auto max-w-sm px-6 md:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-5 md:grid-rows-2">

        {recentPosts.map((recentPost, i) => {
          const urlPathTitle = encodeURIComponent(recentPost.filename);
          const date = new Date(recentPost.date).toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'short', year: '2-digit' });

          return (
            <React.Fragment key={i}>
              <div className={`${i === 0 ? 'md:row-span-2 md:col-span-3' : 'md:col-span-2'} border-[3px] border-vibrant bg-white rounded-sm shadow-lg`}>
                <Link to={`/post/${urlPathTitle}`} key={i}>
                  <div className="flex h-full flex-col overflow-hidden">
                    <div className="px-4 pt-4">
                      <h3 className="text-3xl font-medium font-headline text-vibrant tracking-tight">{recentPost.title}</h3>
                      <p className="mt-2 max-w-lg text-sm/6">{recentPost.description}</p>
                    </div>
                    <div className="flex flex-1 overflow-hidden md:max-h-32 items-center justify-center max-lg:pt-10">
                      {recentPost.imgUrl && (
                        <img
                          className="w-full max-lg:max-w-lg"
                          loading="lazy"
                          // src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                          src={publicPaths.imgPrefix + recentPost.imgUrl}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </React.Fragment>
          )
        })}
          {/* <div className="lg:row-span-2 lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div> */}
          <div className="border-6 border-vibrant bg-white rounded-sm">
            <div className="flex h-full flex-col overflow-hidden">
              {/* <div className="px-4 pt-4 sm:px-4 sm:pt-4"> */}
              <div className="px-4 pt-4">
                <h3 className="text-3xl font-medium font-headline tracking-tight">Performance</h3>
                <p className="mt-2 max-w-lg text-sm/6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  loading="lazy"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  // src={publicPaths.imgPrefix + recentPost.imgUrl}
                  alt=""
                />
              </div>
            </div>
            {/* <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div> */}
          </div>
          {/* <div className="relative">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div> */}
          {/* <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14"></div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
          </div> */}
        </div>
      </div>
    </div>

              {/* <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((recentPost, i) => {
                  const urlPathTitle = encodeURIComponent(recentPost.filename);
                  const date = new Date(recentPost.date).toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'short', year: '2-digit' });
                  return (
                    <React.Fragment key={i}>
                      <Link to={`/post/${urlPathTitle}`} key={i}>
                        <div className="group relative block max-w-sm mx-auto rounded bg-background before:absolute before:inset-0 before:rounded before:border-2 before:border-dashed before:border-gray-900 before:active:hidden">
                          <div className="rounded border-2 border-gray-900 bg-primary shadow-md duration-150 group-hover:translate-x-[-5px] group-hover:translate-y-[-3px] group-hover:no-underline group-active:translate-x-[2px] group-active:translate-y-[1px]">
                            {recentPost.imgUrl && (
                              <img role="presentation" loading="lazy" className="object-cover w-full rounded-t-sm h-44 bg-gray-500" src={publicPaths.imgPrefix + recentPost.imgUrl} />
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
              </div> */}
              {/* <div className="flex justify-center">
                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-cool">Load more posts...</button>
              </div> */}
            </div>
            <div className="overflow-hidden w-full h-[56px] rotate-180 border-none">
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

export default Home2