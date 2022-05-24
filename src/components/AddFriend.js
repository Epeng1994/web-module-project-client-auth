import React, {useState} from 'react'
import axios from 'axios'

const emptyFriend = {
    name:'',
    email:''
}

const AddFriend = props=>{
    const [newFriend, setNewFriend]=useState(emptyFriend)

    const onChange = e =>{
        const {name, value} = e.target
        setNewFriend({...newFriend, [name]:value})
    }

    const onSubmit = e =>{
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', newFriend, {headers:{Authorization:token}})
            .then(res=>{
                //console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div>
            <form onSubmit = {onSubmit}>
                <label htmlFor='name'>Friend Name</label>
                <input type='text' name='name' onChange={onChange} value = {newFriend.name}></input>
                <label htmlFor='email'>Friend Email</label>
                <input type='text' name='email' onChange={onChange} value = {newFriend.email}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend