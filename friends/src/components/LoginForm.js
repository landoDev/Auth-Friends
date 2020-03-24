import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const LoginForm = () =>{
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
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res=>{
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res.data.payload))
            //props.history.push('/friends-list)
        })
    }

    console.log('change made', credentials)
    return(
        <div>
            <form onSubmit={handleLogin}>
                <input type='text' placeholder='Username' name='username' onChange={handleChanges}></input>
                <input type='password' placeholder='Password' name='password' onChange={handleChanges}></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm