import axios from 'axios';
import { setAlert } from './alert';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User

export const loadUser = () => async dispatch => {
   if(localStorage.token) {
       setAuthToken(localStorage.token)
   }

   try {
       const res = await axios.get('https://whispering-journey-02450.herokuapp.com/api/user');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
   } catch(err){
    dispatch({
        type: AUTH_ERROR
    })
   }
}

// Register a user

export const register = ({
    name,
    email,
    password
}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('https://whispering-journey-02450.herokuapp.com/api/register', body, config);
   
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(this.loadUser);
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors)

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// Login User

export const login = ( email,
    password
) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('https://whispering-journey-02450.herokuapp.com/api/login', body, config);
   
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

// Logout / Clear Profile

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}