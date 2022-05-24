import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const LogOut = () =>{
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/logout', {}, {headers:{authorization:token}})
        .then(res=>{
            localStorage.removeItem('token')
            history.push('/')
        })
        .catch(err=>{
            console.log(err)
        })

    },[])
    
    
    return(
        <div>
        </div>
    )
}

export default LogOut