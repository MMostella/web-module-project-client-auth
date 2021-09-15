import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddNewFriend from './components/AddNewFriend';

import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            { !isLoggedIn ? <Link to='/login'>Login</Link> : <div><p>Welcome Back!</p></div> }
          </li>
          <li>
            { isLoggedIn ? <Link to='/logout'>Logout</Link> : <div></div> }
          </li>
          <li>
            { isLoggedIn ? <Link to='/friends'>Friends</Link> : <div></div> }
          </li>
        </ul>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/friends' component={() => <FriendsList friends={friends} setFriends={setFriends}/>} />
          <Route path='/add' render={(props) => <AddNewFriend {...props} friends={friends} setFriends={setFriends}/>} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
