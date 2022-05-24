import React from 'react'
import axiosWithAuth from './AxiosWithAuth'

const Friend = props =>{
    const showFriendInfo = (e) =>{
        console.log(e.target.id)
    }

    return(
        <div id={props.id} onClick = {showFriendInfo}>
            {props.name} {props.email}
        </div>
    )
}


export default Friend