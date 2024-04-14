import fs from 'fs';
import path from 'path';
import extractFrontMatter from '../../src/helpers/extractFrontMatter';

const addEnvVariables = (object) => {
    let variables = '';
    // Read in existing variables to preserve?
    // const existingEnv = fs.readFileSync(path.join(__dirname, '..', '..', '.env.local'));
    for (const [key, value] of Object.entries(object)) {
        variables += `${key}=${value}\n`;
    }
    fs.writeFileSync(path.join(__dirname, '..', '..', '.env.local'), variables, 'utf8');
}

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
                        frontMatter.filename = filename.split('.')[0];
                        posts.push(frontMatter);
                    }
                }
            }
        });
        
        if (posts.length) {
            // Create list of favourites
            const favourites = posts.filter((post) => post.favourite === 'true');
            if (favourites.length) {
                fs.writeFileSync(path.join(dataDir, 'favourites.json'), JSON.stringify(favourites), 'utf8');
            }

            // Fetch list of unique categories
            const categories = new Set(posts.map((post) => post.category));
            categories.delete(undefined);
            categories.delete('favourites');
            categories.delete('favorites');
            if (categories.size) {
                const categoriesJson = JSON.stringify([...categories]);
                fs.writeFileSync(path.join(dataDir, 'postCategories.json'), categoriesJson.toLowerCase(), 'utf8');

                categories.forEach((category) => {
                    const categoryPosts = posts.filter((post) => post.category === category);
                    fs.writeFileSync(path.join(dataDir, `${category}.json`), JSON.stringify(categoryPosts), 'utf8');
                });
            }
            // Limit max number of posts in all posts for performance
            posts.slice(0, 80);
            fs.writeFileSync(path.join(dataDir, 'allPosts.json'), JSON.stringify(posts), 'utf8');

            // Sort posts by most recent
            posts.sort((a, b) => b.date-a.date);
            const displayNumber = config.maxDisplayRecentPosts<=20 ? config.maxDisplayRecentPosts : 20;
            const recentPosts = posts.slice(0, displayNumber);
            fs.writeFileSync(path.join(dataDir, 'recentPosts.json'), JSON.stringify(recentPosts), 'utf8');

            const env = {
                VITE_POSTLIST_FORMAT: !!categories.size ? 'categories' : 'allPosts',
                VITE_FAVOURITES: !!favourites.length ? true : false
            }
            addEnvVariables(env);
        }
    } catch (error) {
        throw new Error(error);
    }
};

export default indexPosts;