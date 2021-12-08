import React,{Fragment, useState} from 'react';

function Counter(props){
  const [counter, setCounter] = useState({count:0});

  const add = (e) => {
    let c = Object.assign({}, counter)
    setCounter({count:Number(c.count+1)});
  }

  const sub = (e) => {
    let c = Object.assign({}, counter)
    if(Number(c.count) !== 0){
      setCounter({count:Number(c.count-1)});
    }
  }
  // cannot use methods before initializing  
  const btnObj = [{name:"add", onclick:add},{name:"sub", onclick:sub}];

  const renderCount = () => {
    return (
    <Fragment>
      <h2>{counter.count}</h2>
    </Fragment>)
  }

  const renderButtons = () => {
    return btnObj.map((ele, i)=>{
      return <button key={ele.name} name={ele.name} onClick={ele.onclick}>{ele.name}</button>
    })
  }

  return( 
  <Fragment>
    {renderCount()}
    {renderButtons()}
  </Fragment>)
}

export default Counter