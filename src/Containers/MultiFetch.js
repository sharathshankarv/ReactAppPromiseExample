import React, {Fragment, useEffect, useState, useCallback } from 'react';
import { Table } from 'react-bootstrap';

function MultiFetch(){
  const [data, setData] = useState([]);

  const getData = ()=>{
    let p1 = new Promise((resolve, reject)=>{
      fetch('../data1.json')
      .then(resp => resp.json())
      .then(response => resolve(response))
      .catch(err => reject(err));
    });

    let p2 = new Promise((resolve, reject)=>{
      fetch('./data2.json', {method:"GET", headers: {"Accept": "application/json"}})
      .then(resp => resp.json())
      .then(response => {resolve(response)})
      .catch(err => reject(err));
    });

    // let p3 = new Promise((resolve, reject)=>{
    //   setTimeout(()=>{
    //     debugger
    //     reject("Sharath ");
    //   },5000)
    // }) 
    

    return Promise.all([p1,p2]).then(resp=>{
        let k = resp[0].map(ele=>{
          let f = resp[1].filter(item => ele.id === item.id);
          if(f.length > 0){
            ele.score = f[0].score;
          }
          return ele
        })
        return k;
      
    }).catch(err=>{
      console.log(err)
    });
    
  }

  async function updateData(){
    let result = await getData();
    setData(result)
  }

  // useCallback(()=>{
  //   async function updateData(){
  //     let result = await getData();
  //     setData(result)
  //   }
  // })

  useEffect(()=>{
    updateData()  
  }, []);
 
const renderData = () => {
  if(data !== null){
    return <Table  striped bordered>
      <thead><tr><td>name</td><td>score</td></tr></thead>
      <tbody>
        {data && data.map((ele, i)=>{
          return<tr key={ele.id}>
            <td>{ele.name}</td>
            <td>{ele.score}</td>
          </tr>
        })}
      </tbody>
    </Table>
  }
}



  const renderView = () => {
    return <Fragment>
      <p>Mutliple API call using promise and data Merge </p>
      {data.length > 0 && renderData()}      
      {data.length === 0 && []}      
    </Fragment>
  }

  return renderView();
}

export default MultiFetch;