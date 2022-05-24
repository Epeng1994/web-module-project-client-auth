import React, {useState, useEffect} from 'react'
import axiosWithAuth from './AxiosWithAuth'
import Friend from './Friend'

const FriendList = props => {
    const [friendList, setFriendList] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axiosWithAuth().get('http://localhost:9000/api/friends')
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
                        <Friend id = {a.id} name = {a.name} email ={a.email}/>
                    )
                }) 
            }
        </div>
    )
}


export default FriendList