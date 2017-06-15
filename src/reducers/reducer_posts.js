/**
 * Created by mfpinheiro on 10/06/17.
 */
import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // ES5 style
      // const post = action.payload.data;
      // const newState =  { ...state };
      // newState[post.id] = post;
      // return newState;
      //  ES6 style - Make a new key and set a new data to it
      return { ...state, [action.payload.data.id] : action.payload.data }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
