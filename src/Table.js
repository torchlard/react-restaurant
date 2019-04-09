import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {table} from './data/table_data'

class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      tables: table
    }
  }

  render(){
    return (
      <div>

      </div>
    )
  }
  
  
}














