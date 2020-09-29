import {DUMMY_ACT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './actiontype';
import {userRequest, userSuccess, userFailure} from './actioncreator';
import axios from 'axios'

const initialState ={
    loading : false ,
    users : [],
    err : ''
}

export const reducer = (state = initialState, action) =>{
    if(action.type === DUMMY_ACT){
        console.log('from dummy');
    }
    if(action.type === FETCH_USER_REQUEST){
        return{
            ...state, loading : true,
        }
    }
    if(action.type === FETCH_USER_SUCCESS){
        return{
            ...state, users : action.payload, loading : false, err : ''
        }

    }
    if(action.type === FETCH_USER_FAILURE){
        return {
            ...state,
            users : [],
            err : action.payload
        }
    }

    return state;
}

export const fetchUser = () =>{
    return (dispatch) =>{
        dispatch(userRequest());

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res.data);
            dispatch(userSuccess(res.data));
        })
        .catch(err => {
            console.log(err);
            dispatch(userFailure(err));
        })

    }
}
export default reducer;