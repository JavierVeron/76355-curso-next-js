import PostsAPIbyId from "@/app/Clase4/PostsAPIbyId";

const Posts = async ({params}) => {
    const {id} = await params;    

    return (
        <PostsAPIbyId id={id} />
    )
}

export default Posts