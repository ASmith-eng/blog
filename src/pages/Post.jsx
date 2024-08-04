import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header2';
import Footer from '../components/Footer';
import extractFrontMatter from '../helpers/extractFrontMatter';
import { DataContext } from '../context/dataContext';

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
    const res = await fetch(`/markdown/${routeParams.filename}.md`);
    const post = await res.text();
    setMarkdown(post);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if(!!markdown) {
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
          <div className="text-2xl px-3 py-1">
            <h1>{metaData["title"]}</h1>
          </div>
          <div className="">
            <Markdown remarkPlugins={[remarkGfm]} children={content} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Post