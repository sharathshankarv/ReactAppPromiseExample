import React,{Fragment, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {tweetsActions} from '../_actions';
import {useThrottle} from '../_utilities/Throttle';

import {Card} from '../components/Card' 

const throttleTime = 300; //in MillSec

function TwitterSearch(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.tweetsReducer) 
  const [tweetsData, setTweetsData] = useState(null);
  const [noData, setNoData] = useState(false); 

useEffect(()=>{
  fetchTweets()
},[]);

useEffect(()=>{
  setTweetsData(state.tweets);
  setNoData(state.dataLen === 0? true : false)
}, [state])

const fetchTweets = async () => {
  try {
      const response = await fetch('../twitterData.json');
      const data = await response.json();
      setTweetsData(data)
      setNoData(false)
  } catch (error) {
      console.log("error", error);
  }
};


// ==========================================
// throttle the search for better performance
// ==========================================
const handleSearch = (e) => {
     dispatch(tweetsActions.searchTweets(e.target.value))
}
const throttledFunc = useThrottle(handleSearch, throttleTime);


const renderSearchBox = () => {
  return <Fragment>
            <input 
              style={{width:"100%"}}
              className="top-bottom-20"
              type="search" 
              name="search_tweets" 
              key="search_tweets"
              placeholder="Search Tweets"
              onChange={throttledFunc} />
          </Fragment>
}

const constructData = (rawData) => {
  let data = [];
 if("data" in rawData && "includes" in rawData){
    let users = rawData.includes.users
    let d = rawData.data;
    for(let user of users){
      let tweets = d.filter(t => t.author_id === user.id) 
      data.push({user, tweets})
    }
  }
 return data;
}

const renderCard = (ele) => {
  if(ele.tweets.length > 0){
    return (
      ele.tweets.map((item, i)=>{
        return <Card className="card top-bottom-20" ukey={item.id} ele={ele} item={item} likedislikefunc={handleLikeDislike} />      
      })    
    )
  }
  // return <p>Sorry No Tweets found.!</p>
  return null
}

const handleLikeDislike = (e) => {
  const data = Object.assign({},tweetsData);
  let tId = e.target.dataset.val;
  let filtered = data.data.findIndex(ele=>ele.id === tId);
  data.data[filtered].liked = !data.data[filtered].liked;
  setTweetsData(data);
}


const renderTweets = () => {
  if(tweetsData !== null && tweetsData !== undefined && !noData){
    let renderReadyData = constructData(tweetsData);
    let cardsArr = renderReadyData.map((ele, i)=> renderCard(ele));
    return <div className="viewPort">{cardsArr}</div>
  }else{
    return <p>No Tweets found!</p>;
  }
}


// =========================================
// Render View
// =========================================
return (
  <Fragment>
    {renderSearchBox()}
    {tweetsData && renderTweets()}
  </Fragment>
  )
}

export default TwitterSearch;