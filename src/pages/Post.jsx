import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import { DataContext } from '../context/dataContext';
import extractFrontMatter from '../utils/extractFrontMatter';
import { publicPaths } from '../config/paths';

function Post() {
  const [markdown, setMarkdown] = useState('');
  const [metaData, setMetaData] = useState({});
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const routeParams = useParams();

  const { postFilenames } = useContext(DataContext);

  const fetchPost = async () => {
    // Route protection
    if (!postFilenames.includes(routeParams.filename)) {
      navigate('/NotFound');
    }
    const res = await fetch(`${publicPaths.markdownPrefix}/${routeParams.filename}.md`);
    const post = await res.text();
    setMarkdown(post);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (!!markdown) {
      const [rawFrontMatter, frontMatter] = extractFrontMatter(markdown);
      setMetaData(frontMatter);
      setContent(markdown.replace(rawFrontMatter[0], ""));
    }
  }, [markdown]);

  // useEffect(() => {
  //   console.log(content);
  //   console.log(metaData);
  //   console.log(routeParams);
  // }, [metaData]);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-nowrap">
        <Header />
        <main className="mt-[6rem] flex-grow">
          <header className="max-w-screen-md mx-auto bg-background">
            {!!metaData["imgUrl"] && (
              <div
                style={{ 'backgroundImage': `url(${publicPaths.imgPrefix + metaData["imgUrl"]})` }}
                className={`w-100 h-32 bg-no-repeat bg-cover bg-center`}>
              </div>
            )}
            <div className="p-4 flex justify-between">
              <h1 className="text-4xl font-bold my-1">{metaData["title"]}</h1>
              {!!metaData["date"] && (
                <div className="text-sm my-1 self-end">{metaData["date"]}</div>
              )}
            </div>
            <div className="overflow-hidden w-full h-[56px] rotate-180 border-none">
              <svg className="block w-full h-[50px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="fill-primary"></path>
              </svg>
            </div>
          </header>
          <article className="w-100 max-w-prose my-10 mx-auto bg-primary px-4 md:px-0">
            <Markdown className="prose" remarkPlugins={[remarkGfm]} children={content} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Post