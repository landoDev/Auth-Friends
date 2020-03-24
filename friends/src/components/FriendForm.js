import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';




const FriendForm = props =>{
    const [isAdding, setIsAdding] = useState(false)
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: NaN,
        email: ''
    })

    const handleChanges = e =>{
        e.preventDefault();
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res=>{
            console.log(res);
            setIsAdding(true);
            // localStorage.setItem('token', JSON.stringify(res.data.payload))
            setIsAdding(false)
            props.history.push('/friends-list')
        })
    }
    return(
        <div>
            {isAdding ? (<div>Adding new friend to Central Perk</div>) : (
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' name='name' onChange={handleChanges}></input>
                    <input type='number' placeholder='Age' name='age' onChange={handleChanges}></input>
                    <input type='email' placeholder='Email' name='email' onChange={handleChanges}></input>
                    <button type='submit'>Add</button>
                </form>
            )}
        </div>
    )
}

export default FriendForm