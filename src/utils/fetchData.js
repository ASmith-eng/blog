import { publicPaths } from "../config/paths";

export default async function fetchData(filename, setStateCallback) {
    // const root = import.meta.env.BASE_URL;
    const res = await fetch(publicPaths.dataPrefix + filename);
    const data = await res.json();
    setStateCallback(data);
};