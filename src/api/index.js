export const BASE_URL = 'https://strangers-things.herokuapp.com/api/'
export const COHORT_NAME = '2108-UIC-RM-WEB-PT'
export const API_URL = BASE_URL + COHORT_NAME

// down here is where your api calls will be

export const getPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization' : Bearer XXXXXXX --> should only be if user is logged in
            }
        })

        const data = await response.json()
        return data.data.posts

    } catch (error) {
        throw error
    }

}

// you would need to add other api calls like POST post, UPDATE etc...
/* Calls that do the following:
- Add a new post
- Update post already there
- delete a post
*/

export const loginUser = async (usernameFromForm, passwordFromForm) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: usernameFromForm,
                    password: passwordFromForm
                }
            })
        })

        const token = await response.json()
        console.log("this is token in API ", token)
        return token.data.token

    } catch (error) {
        throw error
    }

}

export const registerUser = async (usernameFromForm, passwordFromForm) => {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: usernameFromForm,
                    password: passwordFromForm
                }
            })
        })

        const token = await response.json()
        return token.data.token

    } catch (error) {
        throw error
    }

}

export const getUser = async (token) => {
    if (token === '') {
        return {}
    }

    console.log("this is the token in get User")
    console.log(token)
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const data = await response.json()
        return data.data

    } catch (error) {
        throw error
    }
}

export const sendMessage = async (postId, token, messageFromUser) => {
    try {
        const response = await fetch(`${API_URL}/posts/${postId}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                message: {
                    content: messageFromUser
                }
            })
        })

        const data = await response.json()
        return data.data.message

    }
    catch (error){
        throw error
    }
}

//-------------- my stuff below

export async function searchQuery({
    century,
    classification,
    queryString,
  }) {
    const url = `${API_URL}/posts`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return data;
    } catch (error) {
      throw error;
    }
  }


// export const getSinglePost = async (postId) => {
//     try {
//         const response = await fetch(`${API_URL}/posts/${postId}`);
//         const result = await response.json();
//         if (result.error) throw result.error;
//         return result.data.player;
//     } catch (err) {
//         console.error('Uh oh, trouble fetching post!', err);
//     }
// };
// //is it post ID to get single post?


// export const addNewPost = async (postObj) => {
//     try {
//         const response = await fetch(
//             `${API_URL}/posts`,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer TOKEN_STRING_HERE'
//                 },
//                 body: JSON.stringify({
//                     title: postObj.title,
//                     description: postObj.description,
//                     price: postObj.price,
//                     willDeliver: postObj.willDeliver,
//                 }),
//             }
//         );
//         const result = await response.json();
//         console.log(result);
//     } catch (err) {
//         console.log(err)
//     }
// };



export const removePost = async (postId, token) => {
    try {
        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return;
    } catch (err) {
        console.error(
            `Whoops, trouble removing post from the list!`,
            err
        );
    }
};


export const editPost = async (postId, token) => {
    try {
        const response = await fetch(
            `${API_URL}/posts/${postId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    title: postId.title,
                    description: postId.description,
                    price: postId.price,
                    willDeliver: postId.willDeliver,
                }),
            }
        );
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.log(err)
    }
};

// you would need to add other api calls like POST post, UPDATE etc...
/* Calls that do the following:
- Add a new post
- Update post already there
- delete a post
*/

// Testing is in  App.js