import React from 'react'
import {BrowserRouter as Router, Route, 
  Link, withRouter} from 'react-router-dom'
import Header from './Header'
import ManagementMenu from './manage_menu'
import ReportMenu from './report_menu'


class Home extends Component {

  render() {
    return (
      <Router>
        <Header logout={this.props.logout} title="Home Page" />
    
        <Link to="/management">Management</Link>
        <Link to="/report">Report</Link>

        <Route path="/management" component={ManagementMenu} />
        <Route path="/report" component={ReportMenu} />

      </Router>
    )
  }

}
  





export default Home









