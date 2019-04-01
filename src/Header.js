import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


const HeaderDisplay = (title) => (
  <div>
    <button>
      <Link to="/home">Home</Link>
    </button>
    { title }
    <button onClick={this.logout}>
      Log out
    </button>
  </div>
) 

const auth = {
  isAuthenticated: false,
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 50)
  }
}


class Header extends Component {
  
}






















