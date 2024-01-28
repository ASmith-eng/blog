class DetailedError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, DetailedError);
    }
}

export default DetailedError;