import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const FriendsList = () =>{
    const [friendData, setFriendData] = useState([]);

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
    return(
        <div>
            {/* {friendData === [] ? (<div>Calling in Friends</div>) : } */}
            <h2>Central Perk Faves</h2>
            {friendData.map(friend=>{
                return(
                    <div key={friend.id}>
                        <h3>{friend.name}</h3>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList