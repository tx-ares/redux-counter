import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => { // This is where our data is resolved.  We create the fetch here.
        console.log('fetching posts...')
        fetch('https://jsonplaceholder.typicode.com/posts') // This is the API call. Will fetch dummy data first,
            .then(res => res.json()) // then , a promise is created to map the data into a json object...
            .then(posts =>
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts
                })
        ); // and finally, send our data to our component state.
};

export const createPost = (postData) => dispatch => { // This is where our data is resolved.  We create the fetch here.
    console.log('Action: createPosts fired!')
    fetch('https://jsonplaceholder.typicode.com/posts' , { // Although it is called 'fetch' this is actually a generic name for a request.  In this case, it will be a POST type request.
      method: 'POST',
      headers: {
          'content-type' : 'application/json'
      },
      body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
};
