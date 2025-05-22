import Link from "next/link";
import getPosts from "./getPosts"

const PostsAPI = async () => {
    const posts = await getPosts();

    return (
        <div className="container m-auto my-20">
            <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {
                posts.map(item => (
                    <li key={item.id} className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                        <p><Link href={"/posts/" + item.id} className="font-black underline underline-offset-1">#{item.id} - {item.title}</Link></p>
                        <p>{item.body}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default PostsAPI