import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';




const LoginForm = props =>{
    const [isLoading, setIsLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e =>{
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res=>{
            console.log(res);
            setIsLoading(true);
            localStorage.setItem('token', JSON.stringify(res.data.payload))
            setIsLoading(false)
            props.history.push('/friends-list')
        })
    }
    console.log('loading status', isLoading)
    // console.log('change made', credentials)
    return(
        <div>
            {isLoading ? (<div>I'll be there for you... In a moment</div>) : (
                <form onSubmit={handleLogin}>
                    <input type='text' placeholder='Username' name='username' onChange={handleChanges}></input>
                    <input type='password' placeholder='Password' name='password' onChange={handleChanges}></input>
                    <button type='submit'>Login</button>
                </form>
            )}
        </div>
    )
}

export default LoginForm