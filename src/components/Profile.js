import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { TextField, Button } from "@mui/material"
import { getUser } from '../api'


export const ProfileView = (playerList) => {


    // Loop through the list of players, and construct some HTML to display each one
    let playerContainerHTML = '';
    for (let i = 0; i < playerList.length; i++) {
        const pup = playerList[i];
        let pupHTML = `
        <div class="single-player-card">
          <div class="header-info">
            <p class="pup-title">${pup.name}</p>
            <p class="pup-number">#${pup.id}</p>
          </div>
          <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
          <button class="detail-button" data-id=${pup.id}>See details</button>
          <button class="delete-button" data-id=${pup.id}>Remove from roster</button>
        </div>
      `;
        playerContainerHTML += pupHTML;
    }

    // After looping, fill the `playerContainer` div with the HTML we constructed above
    playerContainer.innerHTML = playerContainerHTML;

    // Now that the HTML for all players has been added to the DOM,
    // we want to grab those "See details" buttons on each player
    // and attach a click handler to each one
    let detailButtons = [...document.getElementsByClassName('detail-button')];
    for (let i = 0; i < detailButtons.length; i++) {
        const button = detailButtons[i];
        button.addEventListener('click', async () => {
            /*
              YOUR CODE HERE */
            let playerId = button.dataset.id;
            console.log(playerId);
            let getSinglePlayer = await fetchSinglePlayer(playerId);
            renderSinglePlayer(getSinglePlayer);
        });
    }
    let deleteButtons = [...document.getElementsByClassName('delete-button')];
    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];
        button.addEventListener('click', async () => {
            await removePlayer(button.dataset.id);
            const players = await fetchAllPlayers();
            renderAllPlayers(players);
        });
    }
};




// const ProfileView = ({ posts, token }) => {
//     const [post, setProfile] = useState({})


//     let { id } = useParams()

//     useEffect(() => {
//         const getProfile = async () => {
//             let current = await posts.find((post) => {
//                 return post._id === id
//             })

//             setProfile(current)
//         }

//         getProfile()
//     }, [])


//     const handleSubmit = async (event) => {
//         event.preventDefault();

//        const data = await getUser(id, token)
//        console.log(data)

//     }

//     return <>
//         <h2>{post.title}</h2>
//         <h3>Profile </h3>
//         <div>
//             {
//                 posts.map(post => <PostSingle key={post._id} post={post}>
//                     {
//                         token.length > 0 ?
//                              post.isAuthor ? <button> {/* add OnClick that should go to view post with edit and delete buttons*/}View </button> :
//                             <button onClick={ () => {navigate('/posts/message/' + post._id )}}> Send Message </button>
//                         : 'No Button'
//                     }
//                     </PostSingle>)
//             }
//         </div>
//     </>
// }

// export default ProfileView