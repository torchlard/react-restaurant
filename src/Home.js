import React, {Component} from 'react'
import {BrowserRouter as Router, Route, 
  Link, withRouter} from 'react-router-dom'
import Header from './Header'
import ManagementMenu from './manage_menu'
import ReportMenu from './report_menu'

import Table from './Table'
import Order from './order'


class Home extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    if (this.props.role === 'admin'){
      return (
        <Router>
          <Header logout={this.props.logout} title="Home Page" />
  
          <Link to="/management">Management</Link>
          <Link to="/report">Report</Link>
  
          <Route path="/management" component={ManagementMenu} />
          <Route path="/report" component={ReportMenu} />
          <Route path="/table" component={Table} role={this.props.role}/>
    
        </Router>
      )
    } else {
      return (
        <div>
          <Router>
            <Header logout={this.props.logout} title="Home Page" />
            <Route path="/home" component={Table} role={this.props.role}/>
            <Route path="/order/:id" component={Order} />
            {/* <Table /> */}

          </Router>
        </div> 
      )
    } 

  }

}
  
export default Home









