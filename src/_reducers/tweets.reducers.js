import {tweetsConstants} from '../_constants'

const initialState = {
  tweets: [],
  dataLen: 0
}

export default function tweetsReducer(state = initialState, action){
  switch(action.type){
    case tweetsConstants.SEARCH_TWEET_SUCCESS:{
      return {
        ...state,
        tweets: action.payload.filterData,
        dataLen: action.payload.foundLen
      }
    }
    default: return state;
  }
}