import React from 'react'

const LogIn = (props) =>{
    const {username, password} = props.loginInfo

    return(
        <div className = 'loginComponent'>
            <h1>Login</h1>
            <form className = 'loginForm' onSubmit = {props.onSubmit}>
                <label htmlFor = 'username' >Username</label>
                <input type='text' name = 'username' value = {username} onChange = {props.onChange}></input>
                <label htmlFor = 'password' >Password</label>
                <input type='password' name = 'password' value = {password} onChange = {props.onChange}></input>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default LogIn