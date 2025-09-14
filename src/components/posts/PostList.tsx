import { useEffect, useState } from "react";

interface PostListProps{}

type Post = {
    id: string;
    userId: string;
    title: string;
    body: string;
}

/**
 * 
 * @returns Shows data from the JSONPlaceholderApi
 */
function PostList() {

    const [posts, setPosts] = useState<Post[]>([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((json) => {
            setPosts(json as unknown as Post[]);
            setIsLoading(false);
        })
        .catch( (err) => {
            setError(err.message);
            setIsLoading(false);
        })
    },[]);
        
    if(isLoading){
        return <div>loading...</div>;
    }

    if(error){
        return <div>Fehler beim Laden der Daten: {error}</div>
    }



    return(
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map( (post)  => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default PostList;