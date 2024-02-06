import fs from 'fs';
import path from 'path';
import extractFrontMatter from '../../src/helpers/extractFrontMatter';

const indexPosts = async () => {
    try {
        const rootDir = path.join(__dirname, '..', '..');
        const markdownDir = path.join(rootDir, 'public', 'markdown');
        const dataDir = path.join(rootDir, 'public', 'data');

        if (!fs.existsSync(markdownDir)) {
            console.log("Markdown directory not found, creating now...");
            fs.mkdirSync(markdownDir);
        }
        if (!fs.existsSync(dataDir)) {
            console.log("Data directory not found, creating now...");
            fs.mkdirSync(dataDir);
        }

        const markdownFiles = fs.readdirSync(markdownDir);
        const config = await JSON.parse(fs.readFileSync(path.join(rootDir, 'config.json')));

        const posts = [];

        markdownFiles.forEach((filename) => {
            // Check the file type is markdown and is not empty before extracting metadata
            // With extracted metadata object check for required keys before adding to posts
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
        });
        
        if (posts.length) {
            // Fetch list of unique categories
            const categories = new Set(posts.map((post) => post.category));
            categories.delete(undefined);
            const categoriesJson = JSON.stringify([...categories]);
            fs.writeFileSync(path.join(dataDir, 'postCategories.json'), categoriesJson, 'utf8');

            categories.forEach((category) => {
                const categoryPosts = posts.filter((post) => post.category === category);
                fs.writeFileSync(path.join(dataDir, `${category}.json`), JSON.stringify(categoryPosts), 'utf8');
            });

            // Sort posts by most recent
            posts.sort((a, b) => b.date-a.date);
            const recentPosts = posts.slice(0, config.maxDisplayRecentPosts);
            fs.writeFileSync(path.join(dataDir, 'recentPosts.json'), JSON.stringify(recentPosts), 'utf8');

            // To do: tidy up use of config file - can run app in different modes?
        }
    } catch (error) {
        throw new Error(error);
    }
};

export default indexPosts;