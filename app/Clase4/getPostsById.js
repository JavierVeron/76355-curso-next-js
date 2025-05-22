const getPostsById = async (id) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
        next:{revalidate:0}
    });
    const data = await response.json();

    return data;
}

export default getPostsById