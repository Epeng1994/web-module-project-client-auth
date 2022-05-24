import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LogIn from './components/Login'
import FriendList from './components/FriendList'
import AddFriend from './components/AddFriend'
import LogOut from './components/LogOut'
import PrivateRoute from './components/PrivateRoute';

import axios from 'axios'
import {useHistory} from 'react-router-dom'

const emptyLogin = {
  username: 'Bloom',
  password: 'Tech'
}



function App() {
  const [loginInfo, setLoginInfo] = useState(emptyLogin)
  const history = useHistory()

  const onChange = e =>{
    const {name, value} = e.target
    setLoginInfo({...loginInfo, [name]:value})
  }

  const onSubmit = e =>{
    e.preventDefault();
    let loginObj ={
      username: loginInfo.username,
      password: loginInfo.password
    }
    axios.post('http://localhost:9000/api/login', loginObj)
      .then(res=>{
        localStorage.setItem('token', res.data.token)
        history.push('/friendlist')
    })
  }

  return (
    <div>
      <div className="App">
        <h1>Friends Database</h1>
          <div className = 'container'>
              <Link to ='/' className = 'headerSelect'>Login</Link>
              <Link to ='/friendlist' className = 'headerSelect'>FriendList</Link>
              <Link to ='/addfriend' className = 'headerSelect'>AddFriend</Link>
              <Link to ='/logout' className = 'headerSelect'>LogOut</Link>
          </div>
      </div>
      <div className = 'main'>
        <Route exact path = '/'>
          <LogIn loginInfo = {loginInfo} onChange = {onChange} onSubmit = {onSubmit}/>
        </Route>
        <PrivateRoute exact path = '/friendlist' component={FriendList}/>
        <PrivateRoute path = '/addfriend' component={AddFriend}/>
        <Route path = '/logout'>
          <LogOut/>
        </Route>
      </div>
      
    </div>
  );
}

export default App;
