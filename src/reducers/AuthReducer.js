import { 
    USER_SIGNIN_SUCCESS, 
    // ADM_SIGNIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    AUTH_LOADING,
    COOKIE_CHECKED,
    SIGNOUT   
    } from '../actions/types'

const INITIAL_STATE = {username: '', error: '', role:'', status:'', email:'', loading:false, cookie: false}
// const INITIAL_STATE = {username: '', error: '', role:'', status:'', token:'',email:'', loading:false}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_SIGNIN_SUCCESS :
            return {...INITIAL_STATE, ...action.payload, cookie: true}
        // case ADM_SIGNIN_SUCCESS :
        //     return {...INITIAL_STATE, ...action.payload, cookie: true}
        case AUTH_SYSTEM_ERROR :
            return {...INITIAL_STATE, error : action.payload, cookie: true}
        case AUTH_LOADING :
            return {...INITIAL_STATE, loading : true}
        case COOKIE_CHECKED :
            return {...state, cookie: true};    
        case SIGNOUT :
            return INITIAL_STATE         
        default :
            return state;
    }
}