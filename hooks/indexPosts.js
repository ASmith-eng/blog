import fs from 'fs';
import path from 'path';
import extractFrontMatter from '../src/helpers/extractFrontMatter';

const indexPosts = () => {
    const markdownDir = `${__dirname}/../public/markdown/`;
    const markdownFiles = fs.readdirSync(markdownDir);

    // console.log(markdownFiles);

    const posts = [];

    markdownFiles.forEach((filename) => {
        // Check the file type is markdown and is not empty before extracting metadata
        try {
            if (path.extname(filename) ==='.md') {
                const fileContent = fs.readFileSync(markdownDir+filename);
                if (fileContent.length > 0) {
                    const [rawFrontMatter, frontMatter] = extractFrontMatter(fileContent);
                    frontMatter.filename = filename;
                    posts.push(frontMatter);
                }
            }
        } catch (error) {
            console.log(error);
            // Should throw error here to break out of vite build?
        }
    });

    console.log(posts);

    // inputs: Markdown posts with frontmatter tags
    // outputs: list of category tags, list of 10 most recent posts, list of all posts' titles/descriptions

    // check for:
    // - posts with duplicate filenames/post titles
    // - maximum allowable # of categories?

    // Home
    // List of categories
    // Recent posts

    // Category page
    // List of posts in category

    // Blog post
    // Full md render



    // [
    //     {
    //         name: "example posts",
    //         posts: [
    //             {
    //                 filename: "testPost.md",
    //                 title: "Test Post",
    //                 date: "2024-01-04",
    //                 description: "A short description of the post..."
    //             },
    //             {
    //                 filename: "testPost2.md",
    //                 title: "Test Post 2",
    //                 date: "2024-01-05",
    //                 description: "A short description of the post..."
    //             }
    //         ]
    //     },
    //     {
    //         name: "another category",
    //         posts: [
    //             {
    //                 filename: "anotherPost.md",
    //                 title: "Another post",
    //                 date: "2024-01-04",
    //                 description: "A short description of the post..."
    //             },
    //             {
    //                 filename: "anotherPost2.md",
    //                 title: "Another post 2",
    //                 date: "2024-01-05",
    //                 description: "A short description of the post..."
    //             }
    //         ]
    //     },
    // ]
};

export default indexPosts;