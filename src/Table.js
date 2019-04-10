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
        <table>
          <tr>
            <th>Table No</th>
            <th>Num Of Seat</th>
            <th>Availability</th>
          </tr>
          { this.state.tables.map(item => (
                <tr>
                  <td>{item.tableNo}</td>
                  <td>{item.numOfSeat}</td>
                  <td>{item.available}</td>
                </tr>
              )
            )}
        </table>
      </div>
    )
  }
  
  
}














