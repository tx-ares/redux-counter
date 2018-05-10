import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = { //Exactly what it sounds like.  State before it's changed.
    items: [], // All current posts.
    item: {} // The new post being added.
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer is firing')
            return {
                ...state,
                items: action.payload // This is coming from postActions.js See the fetch call.
            }
        default:
            return state;
    }
}
