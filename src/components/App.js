import React, { useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom' 
import { GlobalStyles } from '@mui/material';
import '@fontsource/roboto/400.css';

import {
  Home,
  NavBar,
  AccountForm,
  PostView,
  MessageForm
} from './'


import {
  getPosts,
  getUser
} from '../api'


function App() {
  // data you should be keeping track of:
  const [token, setToken] = useState('') // token from the login
  const [user, setUser] = useState({}) // use this value to check if someone is logged in or not
  const [posts, setPosts] = useState([]) // an array of objects; this will be updated with API calls
  const [status, setStatus] = useState({}) // used for status bars
  const [open, setOpen] = useState(false) // used to show status or not

  const navigate = useNavigate()
  const handleLogout = () => {
    setUser({})
    setToken('')
  }
  console.log("this is token in App ", token)
  useEffect(() => {

    Promise.all( // test in here
      [
        getPosts(),
        getUser(token)
      ]
    )
    .then(([postsFromAPI, userDataFromAPI]) => {
      setPosts(postsFromAPI)
      setUser(userDataFromAPI)
      // console.log(postsFromAPI)
    })
  }, [token])

  return <div>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <NavBar user={user} handleLogout={handleLogout}></NavBar>  
    {/* // doesnt need to be in a route because it will always be at the top */}
    {/* // another one that doesnt need a route would be Status -- hint this is a component */}

    <Routes>
      {/* 
      Old way
      <Route exact path="/">
        <Home user={user}></Home>
      </Route> 
      */}

      {/* ALL ROUTES HERE */}

       <Route exact path="/" element={<Home  user={user}/>} />
       <Route exact path="/posts" element={<PostView posts={posts} token={token} />} />
       <Route exact path="/account/login" element={<AccountForm  setToken={setToken} user={user} setUser={setUser}/>} />
       <Route exact path="/posts/message/:id" element={<MessageForm posts={posts} token={token} />} />
    </Routes>


  </div>;
}

export default App;