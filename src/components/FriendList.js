import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FriendList = props => {
    const [friendList, setFriendList] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.get('http://localhost:9000/api/friends', {headers:{Authorization:token}})
            .then(res=>{
                //console.log(res.data)
                setFriendList(res.data)
            })
            .catch(err=>{
                console.log('cannot get friends')
            })
    },[])

    return(
        <div>
            <h1>Friends List</h1>
            {
               friendList.length === 0 ? <div>Please sign in to see your friends</div>
               : 
               friendList.map(a=>{
                    return(
                        <div>{a.name} {a.email}</div>
                    )
                }) 
            }
        </div>
    )
}


export default FriendList