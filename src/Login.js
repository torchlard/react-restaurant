import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

let auth = false

class LoginBtn extends Component {
  constructor(props){
    auth = true
  }

  render(){
    if (auth)
      return <Redirect to="/home" />
    else
      return <Redirect to="/" />
  }

}


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {username: '', password: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  // handleSubmit(event){
  //   event.preventDefault()
  //   const [username, password] = [this.state.username, this.state.password]
  //   console.log(username, password)
  //   this.props.authenticate({username: username, password})
  //   auth = true
  // }

  handleSubmit(event){

  }


  render(){

    if (auth) return (<Redirect to="/home" />)
    
    return (
      <div>
        <h2>Restaurant Management System</h2>
        <form onSubmit={this.handleSubmit}> 
          <label>
            Username: 
            <input required type="text" value={this.state.value} 
              name = "username"
              onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input required type="password" value={this.state.password} 
              name="password" onChange={this.handleChange} />
          </label>
          {/* <input type="submit" value="Submit"/> */}
        </form>
          <LoginBtn />
      </div>
    )
  }


}


export default Login;












