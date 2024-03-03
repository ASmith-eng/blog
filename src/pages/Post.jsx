import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import extractFrontMatter from '../helpers/extractFrontMatter';

function Post() {
  const [markdown, setMarkdown] = useState('');
  const [metaData, setMetaData] = useState({});
  const [content, setContent] = useState('');

//   const routeParams = useParams();

  const fetchPost = async () => {
    const res = await fetch(`/markdown/${'testPost'}.md`);
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

  useEffect(() => {
    console.log(content);
    console.log(metaData);
    // console.log(routeParams);
  }, [content]);

  return (
    <>
      <Header />
      <main>
        <div className="">
          <p>{metaData["title"]}</p>
        </div>
        <Markdown remarkPlugins={[remarkGfm]} children={content} />
      </main>
    </>
  )
}

export default Post