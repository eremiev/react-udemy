import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:

            // ES5
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;

            // ES6
            return {...state, [action.payload.data.id]: action.payload.data};

        case DELETE_POST:
            //remove id from local state
            return _.omit(state, action.payload);

        //example for array
        // return _.reject(state, post => post === action.payload); not tested!

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}