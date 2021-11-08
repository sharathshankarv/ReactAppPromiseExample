import {usersConstants} from '../_constants';
export const userActions = {
    getUsers
}

//error parser
function reframeError(err){
    if (err instanceof SyntaxError) {
        return err;
    } else {
        return err.message;
    }
}

function getUsers() {
    let reqObj = {
        method: "GET",
        headers: {"Content-Type": "application/json"}};

    return (dispatch)=>{        
        dispatch(loading());
        //simulate syntax error replaing URL with undefined
        return fetch(`https://api.github.com/users`, reqObj)
        .then(resp=>resp.json())
        .then(resp => dispatch(success(resp)))
        .catch(err => dispatch(failure(err)))
    }

    function loading(){
        return {
            type: usersConstants.GET_USER_LIST_LOADING,
        } 
    }

    function success(resp){
        return {
            type: usersConstants.GET_USER_LIST,
            payload: resp
        }
    }

    function failure(err){
        let error = reframeError(err)
        return{
            type:usersConstants.GET_USER_LIST_ERROR,
            error
        }
    }
}