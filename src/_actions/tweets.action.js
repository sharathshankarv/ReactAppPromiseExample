import {tweetsConstants} from '../_constants'
export const tweetsActions = {
  searchTweets
}

function searchData(searchText){
  let json = require('./twitterData.json');
  if(searchText !== ""){ 
    let copy = JSON.parse(JSON.stringify(json));
    let d = copy.data.filter(ele=>ele.text.toLowerCase().includes(searchText.toLowerCase()))
    copy.data = d;
    return {filterData :copy, foundLen: copy.data.length}
  }
  return {filterData :json, foundLen: json.data.length}
}

function searchTweets(searchText){

  return (dispatch)=>{
    let data = searchData(searchText);
    setTimeout(()=>{
      dispatch(success(data))
    }, 100)
  }


//===================================================================
//=========== BELOW CODE IS ENABLED FOR ACTUAL FUNCITONALITY ========
//===================================================================

  // let reqObj = {
  //   method: "GET",
  //   headers: {"Content-Type": "application/json"}};

  // return (dispatch)=>{        
  //   dispatch(loading());
  //   //simulate syntax error replaing URL with undefined
  //   return fetch(`URL`, reqObj)
  //   .then(resp=>resp.json())
  //   .then(resp => dispatch(success(resp)))
  //   .catch(err => dispatch(failure(err)))
  // }

  function success(resp){
    return {
        type: tweetsConstants.SEARCH_TWEET_SUCCESS,
        payload: resp
    }
  }

  // function failure(err){
  //   let error = reframeError(err)
  //   return{
  //       type:tweetsConstants.SEARCH_TWEET_FAILURE,
  //       error
  //   }
  // }
}