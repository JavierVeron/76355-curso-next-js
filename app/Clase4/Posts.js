const Posts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");    
    const posts = await response.json();
    //console.log(posts);

    return (
        <div className="container m-auto">
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {
                posts.map(item => (
                    <li key={item.id} className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">{item.id}- {item.name} ({item.username})</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Posts