import {usersConstants} from '../_constants';

const initialState = {
  users: []
}
export default function usersReducer(state = initialState, action){
  switch(action.type){
    case usersConstants.GET_USER_LIST:{
      debugger
      return {
        ...state,
        users: action.payload}
    }
    default: return state;
  }
}