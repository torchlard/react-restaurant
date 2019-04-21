import React, { Component } from 'react';
import './App.css';
import LoginEx from './Login'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '', password: '',
      role: '', isAuthenticated: false,
      test: 'a'
    }
    this.changeRole = this.changeRole.bind(this)
    this.changeName = this.changeName.bind(this)
    this.signin = this.signin.bind(this)
    this.signout = this.signout.bind(this)
  }

  signin(cb) {
    if (this.state.username === 'admin'){
      this.setState(state => Object.assign(state, {isAuthenticated: true, role: 'admin'}))
      return true
    }
    else if (this.state.username === 'worker'){
      this.setState(state => Object.assign(state, {isAuthenticated: true, role: 'worker'}))
      return true
    }
    else {
      this.setState(state => Object.assign(state, {isAuthenticated: false, role: ''}))
      return false
    }

  }

  signout(cb){
    this.setState(state => Object.assign(state, {
      isAuthenticated: false, role: '',
      username: '', password: ''
    }))
    setTimeout(cb, 50)
  }

  changeRole(name){
    // console.log(this);
    this.setState(state => (Object.assign(state, {role: name})) )
  }

  changeName(obj){
    this.setState(state => Object.assign(state, obj))
  }
  
  render() {
    return (
      <LoginEx 
        changeRole={this.changeRole} 
        changeName={this.changeName}
        signin={this.signin} signout={this.signout} 
        {...this.state}
      />
    )
  }
}


export default App;
