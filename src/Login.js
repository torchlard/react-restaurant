import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import Home from './Home'

let auth_signin;
let auth_signout;

const LoginButton = withRouter(({history}) => 
  <button onClick={() => 
    {if(auth_signin()) history.push("/home")}
  }>Login</button> )

const LogoutButton = withRouter(({history}) => 
  <button onClick={() => 
    { auth_signout(); history.push("/");}
  }>Logout</button> )  



const PrivateRoute = ({ component: Component, ...rest}) =>  {
  const obj = {...rest};

  // if (obj.username === 'admin'){
  //   console.log('admin')
  //   obj.changeRole('admin')
  // }
  // else {
  //   console.log('worker')
  //   obj.changeRole('worker')
  // }
  console.log('a')

  return (
    <Route {...rest} 
      render = { props => obj.isAuthenticated ? 
        (<Component {...props} />) :
        // (<Component {...props} />) 
        (<Redirect to="/" />)  
      }
    />
  )
}



class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      tmpUsername: '', tmpPassword: '',
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount(){
  //   if (this.state.tmpUsername === 'admin')
  //     this.changeRole('admin')
  //   else
  //     this.changeRole('worker')
  // }

  handleChange(event){
    this.props.changeName({[event.target.name]: event.target.value})
    // this.setState({[event.target.name]: event.target.value})

    // if (this.state.tmpUsername === 'admin'){
    //   console.log('admin')
    //   this.props.changeRole('admin')
    // }
    // else{
    //   console.log('worker')
    //   this.props.changeRole('worker')
    // }

      // this.setState(state => Object.assign(state, {role: 'admin'}))
      // this.setState(state => Object.assign(state, {role: 'worker'}))
  }


  render() {
    return (
      <div>
        <h2>Restaurant Management System</h2>
        <label>
          Username: 
          <input required type="text" value={this.props.username} 
            name = "username"
            onChange={(event) => this.handleChange(event)} />
        </label>
        <label>
          Password:
          <input required type="password" value={this.props.password} 
            name="password" onChange={(event) => this.handleChange(event)} />
        </label>
      </div>
    )
  }
}


class LoginEx extends Component {
  constructor(props){
    super(props);
    auth_signin = props.signin;
    auth_signout = props.signout;
  }
  render(){
    return(
      <Router>
        <Route exact path="/" render={props => <Login {...this.props} />} />    
        {/* {this.props.isAuthenticated ? <LoginButton /> : <LogoutButton/> } */}
        <Switch>
          <Route exact path="/" component={LoginButton} />
          <Route path="/" component={LogoutButton} />
        </Switch>

        <PrivateRoute path="/home" 
          component={Home}
          // render={props => <Home {...this.props} /> }
          {...this.props}
           />

      </Router>
    )
  }
}


export default LoginEx


















