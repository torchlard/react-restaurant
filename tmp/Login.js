import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'



const auth = {
  isAuthenticated: false,
  authenticate(cb) {
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
      <p>
        Welcome!{" "}
        <button onClick={() => {
          auth.signout(() => history.push("/"))
        }}> Logout </button> 
      </p>
    ) : (
      <p>You not logged in.</p>
    )
)


const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} 
    render = { props => auth.isAuthenticated ? 
      (<Component {...props} />) : 
      (<Redirect to={{pathname: "/login", state: {from: props.location}}} />)  }
  />
)

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;


class Login extends Component {
  state = { redirectToReferrer: false}

  login = () => {
    auth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    let {from} = this.props.location.state || {from: {pathname: "/"}}
    let {redirectToReferrer} = this.state

    if (redirectToReferrer)
      return <Redirect to={from} />
    
    return (
      <div>
        <p>must login to view page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}


const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public page</Link>
        </li>
        <li>
          <Link to="/protected">Protected page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
)


export default AuthExample


















