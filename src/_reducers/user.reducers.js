import {usersConstants} from '../_constants';

const initialState = {
  users: [],
  getUserError:null,
  usersLoading:false
}
export default function usersReducer(state = initialState, action){
  switch(action.type){
    case usersConstants.GET_USER_LIST_LOADING:
      return{
        ...state,
        usersLoading:true,
        getUserError:null,
        users: [],
      }
    case usersConstants.GET_USER_LIST:{
      return {
        ...state,
        usersLoading:false,
        users: action.payload}
    }
    case usersConstants.GET_USER_LIST_ERROR: 
    return {
      ...state,
      usersLoading:false,
      getUserError:action.error
    }
    default: return state;
  }
}