export default async function fetchData(filename, setStateCallback) {
    const root = import.meta.env.BASE_URL;
    const res = await fetch(`${root}data/${filename}`);
    const data = await res.json();
    setStateCallback(data);
};