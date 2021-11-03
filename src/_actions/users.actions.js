import {usersConstants} from '../_constants';
export const userActions = {
    getUsers
}

function getUsers() {
    let url = `https://api.github.com/users`;
    return (dispatch)=>{
        return fetch(url, {
            method: "GET",
            headers: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(resp => dispatch(success(resp)))
        .catch(err => dispatch(failure(err)))
    }

    function success(resp){
        return {
            type: usersConstants.GET_USER_LIST,
            payload: resp
        }
    }

    function failure(err){
        return{
            type:usersConstants.GET_USER_LIST_ERROR,
            err
        }
    }
}