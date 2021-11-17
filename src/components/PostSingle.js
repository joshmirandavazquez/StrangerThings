
import React from 'react';

const PostSingle = ({ post, children }) => {
    return <>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>Price: ${post.price}</p>
        <p>Location: {post.location}</p>
        <div>
        {
            children
        }
        </div>
    </>
}

export default PostSingle