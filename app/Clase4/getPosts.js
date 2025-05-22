const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        cache:"no-cache",
        next:{revalidate:3600}
    });
    const data = await response.json();

    return data;
}

export default getPosts