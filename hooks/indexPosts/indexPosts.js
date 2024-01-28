import fs from 'fs';
import path from 'path';
import extractFrontMatter from '../../src/helpers/extractFrontMatter';
import DetailedError from './errorHandling';

const indexPosts = async () => {
    const rootDir = path.join(__dirname, '..', '..');
    const markdownFiles = fs.readdirSync(path.join(rootDir, 'public', 'markdown'));
    const config = await JSON.parse(fs.readFileSync(path.join(rootDir, 'config.json')));
    // todo: add error handling for if file does not exist

    const posts = [];

    markdownFiles.forEach((filename) => {
        // Check the file type is markdown and is not empty before extracting metadata
        // With extracted metadata object check for required keys before adding to posts
        try {
            if (path.extname(filename) ==='.md') {
                const fileContent = fs.readFileSync(path.join(rootDir, 'public', 'markdown', filename));
                if (fileContent.length > 0) {
                    const [rawFrontMatter, frontMatter] = extractFrontMatter(fileContent);
                    if(config.requiredMetadataKeys.every((key) => Object.keys(frontMatter).includes(key))) {
                        if (frontMatter.date) frontMatter.date = new Date(frontMatter.date);
                        frontMatter.filename = filename;
                        posts.push(frontMatter);
                    }
                }
            }
        } catch (error) {
            throw new Error(error);
            // throw new DetailedError(error.name, error.message);
            // Should throw error here to break out of vite build?
        }
    });
    
    if (posts.length) {
        // Fetch list of unique categories
        const categories = new Set(posts.map((post) => post.category));
        categories.delete(undefined);
        const categoriesJson = JSON.stringify([...categories]);
        fs.writeFileSync(path.join(rootDir, 'src', 'data', 'postCategories.json'), categoriesJson, 'utf8');

        categories.forEach((category) => {
            const categoryPosts = posts.filter((post) => post.category === category);
            fs.writeFileSync(path.join(rootDir, 'src', 'data', `${category}.json`), JSON.stringify(categoryPosts), 'utf8');
        });

        // Sort posts by most recent
        posts.sort((a, b) => b.date-a.date);
        const recentPosts = posts.slice(0, config.maxDisplayRecentPosts);
        fs.writeFileSync(path.join(rootDir, 'src', 'data', 'recentPosts.json'), JSON.stringify(recentPosts), 'utf8');
    }

    // inputs: Markdown posts with frontmatter tags
    // outputs: list of category tags, list of most recent posts, list of all posts' titles/descriptions

    // check for:
    // - posts with duplicate filenames/post titles

    // Home
    // List of categories
    // Recent posts

    // Category page
    // List of posts in category

    // Blog post
    // Full md render
};

export default indexPosts;