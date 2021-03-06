import React, { useState, formData, setFormData } from 'react';
import axios from 'axios';
import { Link, Redirect} from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { PromiseProvider } from 'mongoose';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import { login } from '../actions/auth';
// let formData = new FormData(); 


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


const { email, password } = formData;

const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}
const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
}
    
// Redirect if logged in

if(isAuthenticated){
    return <Redirect to="/Home" />
}

return (
    <div>
        <h1>Sign In</h1>
        <form onSubmit={e => onSubmit(e)}>
            <div>
            <input type = 'text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            minLength='6'
            />
            </div>
            <div>
            <input type = 'text'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            />
            </div>
            <input type='submit' value='Login'
            />
        </form>
        </div>
)
};

// Login.propTypes = {
//     Login: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool
// }

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, 
    { login })(Login);