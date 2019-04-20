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


class Table extends PureComponent {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     tables: table,
  //     edit: false
  //   }
  // }
  state = {
    tables: table,
    edit: false
  }

  changeItem(idx, item, attr, value){
    this.setState(state => ({
      edit: state.edit,
      tables: state.tables.map((item,i) => (i === idx )
        ? Object.assign(item, {attr: value})
        : item )
    }) )
  }

  render(){
    if (this.state.edit)
      inputProps.readonly = false;
    else
      inputProps.readonly = true;

    return (
      <div>
        <button onClick={() => {this.state.edit = !this.state.edit} }>
          {this.state.edit ? 'Edit' : 'Read only'}</button>
        <table>
          <tr>
            <th>Table No</th>
            <th>Num Of Seat</th>
            <th>Availability</th>
          </tr>
          { this.state.tables.map((item, idx) => (
                <tr key={item.id}>
                  <td><input type="text" name="tableNo" 
                    value={item.tableNo} {...inputProps}
                    onChange={event => this.setState(state => ({
                      edit: state.edit,
                      tables: state.tables.map((item,i) => (i === idx )
                        ? Object.assign(item, {tableNo: event.target.value})
                        : item )
                    }) )}
                    /></td>

                  <td><input type="number" name="numOfSeat" 
                    value={item.numOfSeat} {...inputProps} 
                    onChange={event => changeItem(idx,item,'numOfSeat', event.target.value)}
                    /></td>

                  <td><button onClick={() => changeItem(idx, item,'available', 1-item.available)
                   }>{item.available}</button></td>

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
        </table>
      </div>
    )
  }
}

const TableEx = () => (
  <Router>
    <Route exact path="/tables" component={Table} />
    <Route exact
  </Router>
)













