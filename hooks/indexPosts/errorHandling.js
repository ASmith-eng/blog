const throwDetailedError = (error) => {
    if (error.code ==='ENOENT') {
        console.log(error.message);
        const fileNotFoundMessages = {
            config: "Config file not found! make sure this is in the root of your project directory",
            markdown: "It looks like you don't have a 'markdown' directory at /public/markdown"
        };

        Object.keys(fileNotFoundMessages).forEach((key) => {
            if (error.message.includes(key)) {
                console.log(fileNotFoundMessages[key]);
                return;
            }
        });
    }
    throw new Error(error);
};

export default throwDetailedError;