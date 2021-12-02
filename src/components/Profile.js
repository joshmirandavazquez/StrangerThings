import React, { useState } from "react"

export const ProfileView = (token) => {
  const [posts, setPosts] = useState([]);


  const userProfile = async (token) => {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2108-UIC-RM-WEB-PT/users/me`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    const data = await response.json()
    console.log('delete', data);
    if (data) {
      const userPosts = posts.map(post => post._id == post._id);
      setPosts(userPosts)
    }
  }


  const handleDelete = async (postIdToDelete, token) => {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2108-UIC-RM-WEB-PT/posts/${postIdToDelete}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    const data = await response.json()
    console.log('delete', data);
    if (data) {
      const newPosts = posts.filter(post => post._id !== postIdToDelete);
      setPosts(newPosts)
    }
  }


  return (

    <div className="userposts">
      {
        posts.map((post, index) =>

          <div className="posts"
            key={index}>
            <h2 className="posts-title">
              {post.title}
            </h2>
            <p className="posts-description">
              {post.description}
            </p>
            <p className="post-price">
              {post.price}
            </p>
            <p className="post-location">
              {post.location}
            </p>
            <button type='button'
              className="delete-button"
              onClick={() => handleDelete(post.id)}>Delete</button>
          </div>)

      }
    </div>
  )

}


export default ProfileView