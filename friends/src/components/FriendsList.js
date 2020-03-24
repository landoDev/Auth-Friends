import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const FriendsList = () =>{
    const [friendData, setFriendData] = useState([]);
    const [editFriends, setEditFriends] = useState(false);
    const [editId, setEditId] = useState(NaN);
    const [changeData, setChangeData] = useState({
        name: '',
        age: NaN,
        email: ''
    })
    useEffect(()=>{
        return getData()
    },[])
    const getData = () =>{
    axiosWithAuth()
      .get('/api/friends')
      .then(res=>{
        // console.log(res.data)
        setFriendData(res.data)
      })
      .catch(err=> console.log('Prob something Ross did', err))
    }  
    // THE INTENT FOR THE FOLLOWING THREE FUNCTIONS WAS TO BE ABLE TO EDIT A FRIEND. AS OF RIGHT NOW I CAN'T FIND HOW TO DYNAMICALLY PASS THE ID TO THE PUT REQUEST
    const updateFriend = e =>{
        e.preventDefault()
        // console.log('button for edit', e.target.name)
        setEditFriends(true)
        setEditId(e.target)
    }

    const handleChanges = e =>{
        e.preventDefault();
        setChangeData({
            ...changeData,
            [e.target.name]: e.target.value
        })
    }
    const handleUpdateFriend = e =>{
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/friends/${editId}`, changeData)
        
    }

    const deleteFriend = (id) =>{
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(res=>{
            console.log('delete response', res)
        })
    }
    return(
        <div>
            {/* {friendData === [] ? (<div>Calling in Friends</div>) : } */}
            <h2>Central Perk Faves</h2>
            {friendData.map(friend=>{
                return(
                    <div key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>{friend.email}</p>
                        {editFriends ? (
                            <form onSubmit={handleUpdateFriend}>
                                <input type='text' placeholder='Name' name='name' onChange={handleChanges}></input>
                                <input type='number' placeholder='Age' name='age' onChange={handleChanges}></input>
                                <input type='email' placeholder='Email' name='email' onChange={handleChanges}></input>
                                <button name={friend.id}>Edit</button>
                            </form>
                        ): (<button onClick={updateFriend}>Edit Friend</button>)}
                        <button onClick={deleteFriend}>Delete Friend</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList