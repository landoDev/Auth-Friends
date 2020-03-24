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
        console.log(res)
      })
      .catch(err=> console.log('wtf man', err))
    }   
    return(
        <div>
            <h2>Your Friends</h2>
        </div>
    )
}

export default FriendsList