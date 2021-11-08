import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import{constants} from '../_constants'

import {Table} from 'react-bootstrap';


import {userActions} from '../_actions'

function Users(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.usersReducer) 

    useEffect(()=>{
        dispatch(userActions.getUsers());
    },[dispatch]);

    // grid rendering part
    const renderGrid = () => {
        return <Table striped bordered hover>
            <thead>
                <tr>
                    <th>login</th>
                    <th>html_url</th>
                </tr>
            </thead>
            <tbody>
                {state.users && state.users.map((ele,i)=>{
                    return <tr key={ele.login}>
                        <td>{ele.login}</td>
                        <td>{ele.html_url}</td>
                    </tr> 
                })}
            </tbody>
        </Table>
    }

// error handling part 
   const renderError = () => {
        if(state.getUserError){
            return <p className="text-danger">{`${constants.error_occured}:${state.getUserError.message}`}</p>
        }
    }


    return (
      <Fragment >
        <p> Users </p> 
        {state.users && renderGrid()}
        {state.getUserError && renderError()}
        {state.usersLoading && <p>{constants.fetching_in_progress}</p>}
      </Fragment >
    )
}

export default Users