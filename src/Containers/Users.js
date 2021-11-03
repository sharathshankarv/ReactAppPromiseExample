import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import {userActions} from '../_actions'

function Users(props) {
    const dispatch = useDispatch()
    const state = useSelector(state =>state.usersReducer) 

    useEffect(()=>{
        dispatch(userActions.getUsers());
    },[dispatch]);

    const renderGrid = () => {
        return <table>
            <thead>
                <tr><th>login</th><th>html_url</th></tr>
            </thead>
            <tbody>
                {state.users && state.users.map((ele,i)=>{
                    return <tr key={ele.login}>
                        <td>{ele.login}</td>
                        <td>{ele.html_url}</td>
                    </tr> 
                })}
            </tbody>
        </table>
    }
    return <Fragment >
            <p> Users </p> 
            {renderGrid()}
        </Fragment >
}

export default Users