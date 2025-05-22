import getPostsById from "./getPostsById";

const PostsAPIbyId = async ({id}) => {    
    const item = await getPostsById(id);

    return (
        <div className="container m-auto my-20">
            <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li key={item.id} className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    <p>#{item.id} - {item.title}</p>
                    <p>{item.body}</p>
                </li>
            </ul>
        </div>
    )
}

export default PostsAPIbyId