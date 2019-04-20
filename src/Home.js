import React from 'react'
import {BrowserRouter as Router, Route, 
  Link, withRouter} from 'react-router-dom'
import Header from './Header'
import ManagementMenu from './manage_menu'
import ReportMenu from './report_menu'

import {Table} from './Table'


class Home extends Component {
  // constructor(props){
  //   super(props);
  // }
  
  render() {
    if (this.props.role === 'admin'){
      return (
        <Router>
          <Header logout={this.props.logout} title="Home Page" />
  
          <Link to="/management">Management</Link>
          <Link to="/report">Report</Link>
  
          <Route path="/management" component={ManagementMenu} />
          <Route path="/report" component={ReportMenu} />
          <Route path="/table" component={Table} />
    
        </Router>
      )
    } else {
      return (
        <div>
          <Header logout={this.props.logout} title="Home Page" />
          <Table /> 
        </div> 
      )
    } 

  }

}
  
export default Home









