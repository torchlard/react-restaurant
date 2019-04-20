import React, {PureComponent} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {table} from './data/table_data'
import {Order} from './order'

let inputProps = {readOnly: false}

class Table extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      tables: table,
      edit: false
    }
  }
  // state = {
  //   tables: table,
  //   edit: false
  // }

  // changeItem(idx, item, attr, value){
  //   this.setState(state => ({
  //     edit: state.edit,
  //     tables: state.tables.map( (item,i) => (i === idx )
  //       ? Object.assign(item, {attrs: value})
  //       : item )
  //   }) )
  // }

  render(){
    if (this.state.edit)
      inputProps.readOnly = false;
    else
      inputProps.readOnly = true;

    return (
      <div>
        <button onClick={() => this.setState(state => ({
          edit: !state.edit,
          tables: state.tables
        })) }>
          {this.state.edit ? 'Edit' : 'Read only'}</button>
        <table>
          <thead>
            <tr>
              <th>Table No</th>
              <th>Num Of Seat</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            { this.state.tables.map((item, idx) => (
                  <tr key={item.id}>
                    <td><input type="text" name="tableNo" 
                      value={item.tableNo} {...inputProps}
                      onChange={event => this.setState(state => ({
                        edit: state.edit,
                        tables: state.tables.map((item,i) => (i === idx )
                          ? Object.assign(item, {tableNo: item.tableNo})
                          : item )
                      }) )}
                      /></td>

                    {/* <td><input type="number" name="numOfSeat" 
                      value={item.numOfSeat} {...inputProps} 
                      onChange={event => this.changeItem(idx,item,'numOfSeat', item.numOfSeat)}
                      /></td> */}

                    {/* <td><button onClick={() => this.changeItem(idx, item,'available', 1-item.available)
                    }>{item.available}</button></td> */}

                    <td>
                      <button onClick={() => this.setState(state => ({
                        edit: state.edit,
                        tables: state.tables.map( (item,i) => (i === idx )
                          ? Object.assign(item, {available: 1-item.available})
                          : item )
                      })) }>{item.available}</button></td>

                    <Link to="/order" id={item.id}>Go To Table</Link>

                    {this.state.edit 
                      ? <button onClick={() => 
                        this.setState(state => ({
                          edit: state.edit,
                          tables: state.tables.filter((item,i) => i != idx)
                        })) }>Delete</button> 
                      : '' }
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;












