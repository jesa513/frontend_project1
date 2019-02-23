import axios from 'axios'
import Cookies from 'universal-cookie';
import {
    USER_SIGNIN_SUCCESS, 
    // ADM_SIGNIN_SUCCESS, 
    AUTH_SYSTEM_ERROR, 
    SIGNOUT,
    AUTH_LOADING,
    COOKIE_CHECKED,
    SELECT_PRODUCT
 }from './types'
 const cookies = new Cookies();
  

export const onUserRegister =({
    nama,
    perusahaan,
    alamat,
    telepon,
    username, 
    email, 
    password}) => {
       
    return (dispatch) => {
        dispatch({
            type: AUTH_LOADING
        })
        if(nama === '' || perusahaan === '' || alamat === '' || telepon === '' || username === '' || email === "" || password === '' ){
            dispatch ({type: AUTH_SYSTEM_ERROR , 
                payload: 'Semua Form harus diisi'})
        }
        else {
            axios.post('http://localhost:1997/auth/register', {
            nama, perusahaan, alamat, telepon, username, email, password
            }).then((res) => {
                   console.log(res)
                   if(res.data.status === 'error'){
                        dispatch({type : AUTH_SYSTEM_ERROR, 
                        payload : res.data.message}) 
                      }
                      else {
                        cookies.set('dataCustomer', res.data[0].username, {path: '/'})
                        dispatch({type : USER_SIGNIN_SUCCESS, 
                        payload : res.data}) 
                            }
            }).catch ((err)=> {
            console.log(err)
            dispatch({type: AUTH_SYSTEM_ERROR, 
                payload: 'System Error'})
        })
        }
}
}
        //   else {
        //   axios.post('http://localhost:1997/auth/register', {
        //     nama, perusahaan, alamat, telepon, username, email, password
        //     }).then((res) => {
        //           console.log(res)
        //           dispatch({ type : USER_LOGIN_SUCCESS, payload: res.data.username })
        //       }).catch((err) => {
        //           console.log(err);
        //           dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error' })
        //       })
        //   }
      
export const onUserSignout = () => {
            return {
                type: SIGNOUT
            }
        }

export const onUserVerified = (userData) => {
    return {
        type: USER_SIGNIN_SUCCESS,
        payload :userData
    }
}

export const onUserSignIn = ({
    username,
    password
}) => {
return (dispatch) => {
    dispatch({
        type: AUTH_LOADING
    })
    signIn(dispatch, username, password);
}
}

var signIn = (dispatch, username, password) => {
axios.post('http://localhost:1997/auth/signin', {
            username,
            password
    })
.then((res) => {
    // console.log(res)
    console.log(res.data[0].username)
    if (res.data.length > 0) {
        cookies.set('dataCustomer', res.data[0].username, {path: '/'})
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: {username: res.data[0].username }
        })
    } else {
        dispatch({
            type: AUTH_SYSTEM_ERROR,
            payload: 'Username or password invalid'
        })
    }
})
.catch((err) => {
    console.log(err)
    dispatch({
        type: AUTH_SYSTEM_ERROR,
        payload: 'System Error'
    })
})
}

export const keepSignin = (username) => {
    return (dispatch) => {
        axios.post('http://localhost:1997/auth/keepsignin', {
                username
        })
        .then((res) => {
            if (res.data.length > 0) {
                dispatch ({
                    type: USER_SIGNIN_SUCCESS,
                    //payload: {username: res.data[0].username, status: res.data[0].status, role: res.data[0].role }
                    payload: {username: res.data[0].username }
                })
            }
        })
    }
}


// export const onAdmSignIn = ({
//     admusername,
//     password
// }) => {
// return (dispatch) => {
//     dispatch({
//         type: AUTH_LOADING
//     })
//     admsignIn(dispatch, admusername, password);
// }
// }

// var admsignIn = (dispatch, admusername, password) => {
// axios.post('http://localhost:1997/auth/admsignin', {
//             admusername,
//             password
//     })
// .then((res) => {
//     // console.log(res)
//     console.log(res.data[0].admusername)
//     if (res.data.length > 0) {
//         dispatch({
//             type: ADM_SIGNIN_SUCCESS,
//             payload: {admusername: res.data[0].admusername }
//         })
//     } else {
//         dispatch({
//             type: AUTH_SYSTEM_ERROR,
//             payload: 'Username or password invalid'
//         })
//     }
// })
// .catch((err) => {
//     console.log(err)
//     dispatch({
//         type: AUTH_SYSTEM_ERROR,
//         payload: 'System Error'
//     })
// })
// }


// export const onAdmSignout = () => {
//     return {
//         type: SIGNOUT
//     }
// }


// export const admkeepSignin = (admusername) => {
//     return (dispatch) => {
//         axios.post('http://localhost:1997/auth/keepsignin', {
//                 admusername
//         })
//         .then((res) => {
//             if (res.data.length > 0) {
//                 dispatch ({
//                     type: ADM_SIGNIN_SUCCESS,
//                     //payload: {username: res.data[0].username, status: res.data[0].status, role: res.data[0].role }
//                     payload: {admusername: res.data[0].admusername }
//                 })
//             }
//         })
//     }
// }


export const cookieChecked = () => {
    return {
        type: COOKIE_CHECKED
    }
}

export const select_product = (selectedProduct) => {
    return { 
        type: SELECT_PRODUCT,
        payload: selectedProduct
    }
}