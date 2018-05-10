import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = { //Exactly what it sounds like.  State before it's changed.
    items: [], // All current posts.
    item: {} // The new post being added.
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('Reducer: FETCH_POSTS case is firing')
            return {
                ...state,
                items: action.payload // This is coming from postActions.js See the fetch call fetchPosts.
            }
        case NEW_POST:
            console.log('Reducer: FETCH_POSTS case is firing')
            return {
                ...state,
                item: action.payload // This is coming from postActions.js See the fetch call for createPost.
            }
        default:
            return state;
    }
}
