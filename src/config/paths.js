const base = import.meta.env.BASE_URL || '';

export const publicPaths = {
    imgPrefix: base + 'img/',
    markdownPrefix: base + 'markdown/',
    dataPrefix: base + 'data/',
};