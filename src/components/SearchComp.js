import React, { useState, useEffect } from "react";

const SearchComp = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);


    useEffect(() => {
        searchPosts();
    }, []);

    const searchPosts = async () => {
        const url = "https://strangers-things.herokuapp.com/api/2108-UIC-RM-WEB-PT'/posts";
        const response = await fetch(url);
        const info = await response.json();
        setPosts(info);
        setSearchTerm(info);
    };

    function postMatches(post, text) {
        const newResults = searchPosts.filter(post => post.name.includes(text, post));
        console.log('newResults', newResults);
        setPosts(newResults);
    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts; 


    return (
        <div>
            Search:
            <input type="text" onChange={event => postMatches(event.target.value)} />
            {postsToDisplay}
        </div>
    );
}


export default SearchComp;