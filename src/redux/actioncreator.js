
import {DUMMY_ACT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './actiontype';

 const DummyFunc = () =>{
    console.log('ac');
    return {
        type : DUMMY_ACT
    }
}


const userRequest = () =>{
    console.log('userRequest');
    return{
        type : FETCH_USER_REQUEST
    }
}

const userSuccess = (users) =>{
    console.log('userSuccess');
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

const userFailure = (err) =>{
    console.log('userFailure');
    return {
        type : FETCH_USER_FAILURE,
        payload : err
    }
}
export {DummyFunc, userRequest, userSuccess, userFailure}

