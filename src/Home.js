import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Header'
import ManagementMenu from './manage_menu'
import ReportMenu from './report_menu'

import Table from './Table'
import Order from './order'
import User from './User'
import Menu from './Menu'

class Home extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    if (this.props.role === 'admin'){
      const obj = {role:this.props.role, username:this.props.username} ;
      
      return (
        <Router>
          <Header logout={this.props.logout} title="Home Page" />
  
          <Link to="/management">Management</Link>
          <Link to="/report">Report</Link>
  
          <Route path="/management" component={ManagementMenu} />
          <Route path="/report" component={ReportMenu} />

          <Route exact path="/management/user" render={() => <User {...obj}/>}  />
          <Route exact path="/management/menu" render={() => <Menu {...obj}/> }  />
          <Route exact path="/management/table" render={() => <Table {...obj}/>}  />
    
        </Router>
      )
    } else {
      return (
        <div>
          <Router>
            <Header logout={this.props.logout} title="Home Page" />
            <Route path="/home" component={Table} role={this.props.role}/>
            <Route path="/order/:tableId" component={Order} />

          </Router>
        </div> 
      )
    } 

  }

}
  
export default Home









