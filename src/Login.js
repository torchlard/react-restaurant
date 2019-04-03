import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Home from './Home'


const auth = {
  isAuthenticated: false,
  signin(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 50)
  }
}


const AuthButton = withRouter(
  // listen to changes in prop.history
  ({ history }) =>
    auth.isAuthenticated ? (
      <button onClick={() => {
        auth.signout(() => history.push("/"))
      }}> Logout </button> 
    ) : ('')
    // (
    //   <button onClick={() => {
    //     auth.signin(() => history.push("/home"))
    //   }}> Login </button>
    // )
)

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} 
    render = { props => auth.isAuthenticated ? 
      (<Component {...props} />) : 
      (<Redirect to="/" />)  }
  />
)


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {username: '', password: ''}

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
      return (
        <div>
          <h2>Restaurant Management System</h2>
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
        </div>
      )
  }
}


const LoginEx = () => (
  <Router>

    <Route exact path="/" component={Login} />    
    <AuthButton />
    <PrivateRoute path="/home" component={Home} logout={auth.signout} />

  </Router>
)


export default LoginEx


















