import React from "react"
import { PostSingle, SearchComp } from "."
import { useNavigate } from "react-router"
import { Button } from '@mui/material';


const PostView = ({ posts, token }) => {
    const navigate = useNavigate()
    console.log("is there a token ", token.length > 0)
    return <>
        <h2>Posts</h2>
        {/* <div>
            {
                <SearchComp key={post._id} post={post}>
                    {

                        <form action="/" method="get">
                            <label htmlFor="header-search">
                                <span className="visually-hidden">Search</span>
                            </label>
                            <input
                                type="text"
                                id="header-search"
                                placeholder="Search Posts"
                            />
                            <button type="submit">Search</button>
                        </form>
                    }
                    </SearchComp>
            }
        </div> */}
        <div>
            {
                posts.map(post => <PostSingle key={post._id} post={post}>
                    {
                        token.length > 0 ?
                            post.isAuthor ? <button> {/* add OnClick that should go to view post with edit and delete buttons*/}View </button> :
                                <Button fullWidth variant="contained" button onClick={() => { navigate('/posts/message/' + post._id) }}> Send Message </Button>
                            : 'No Button'
                    }
                </PostSingle>)
            }
        </div>
    </>
}


export default PostView