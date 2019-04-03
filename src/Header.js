import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'



class Header extends Component {
  
  render() {
    return (
      <div>
        <button>
          <Link to="/home">Home</Link>
        </button>

        {this.props.title}

        {withRouter(
          ({history}) =>
          <button onClick={() => this.props.logout(
            () => history.push("/")
          )}> Logout </button>
        )}
        
      </div>
    ) 
  }
} 


export default Header























