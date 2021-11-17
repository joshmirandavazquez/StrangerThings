import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addNewPost } from '../api'


const NewPost = ({ setToken }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(true)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await addNewPost(title, description, price, location, willDeliver)
        // data will be a user token

        if (data) {
            setToken(data)
        }
    }

    return <>

        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" onChange={(event) => { setTitle(event.target.value) }} />
            </label>
            <label>
                Description:
                <input type="text" onChange={(event) => { setDescription(event.target.value) }} />
            </label>
            <label>
                Price:
                <input type="text" onChange={(event) => { setPrice(event.target.value) }} />
            </label>
            <label>
                Location:
                <input type="text" onChange={(event) => { setLocation(event.target.value) }} />
            </label>
            <label>
                Will Deliver:
                <input type="checkbox" onChange={(event) => { setWillDeliver(event.target.value) }} />
            </label>
            <input type="submit"> Create Post </input>
        </form>
    </>

}


export default NewPost




// this will be a new ROUTE that appears once a user clicks to add posts at the top of POSTS
// we will  be using the POST method here, taking in title, description, price, location, willing to deliver checkbox, and create button with event listener
// we also need a success or failure display using : ?
// after the post has been added we should return to POSTS. Route back to all posts?!

