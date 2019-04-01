import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter, 
  BrowserRouter as Router} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Home from './Home'


let auth = true

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} 
    render = {props => auth
      ? (<Home {...props} /> )
      : (<Redirect to={{pathname: "/" }} /> )
    }
  />  
)


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: true
    }
  }

  auth(value){
    console.log('app: ', value);
    auth = true
    // this.setState({ isAuthenticated: true })
    // this.props.history.push("/home")
  }
  
  render() {

    return (
      <Router>
        <Route exact path='/' 
          render = {(props) => <Login {...props} 
            authenticate = { i => this.auth(i)} /> }
          // component={Login} 
           />
        <PrivateRoute path='/home' component={Home} 
          isAuth={this.state.isAuthenticated} />
      </Router>
    );
  }
}




export default App;
