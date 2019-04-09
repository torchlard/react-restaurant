import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import User from './User'
import Table from './Table'
import Menu from './Menu'


const ManageMenu = () => (
  <div>
    <Link to="/management/user">Edit user</Link>
    <Link to="/management/menu">Edit menu</Link>
    <Link to="/management/tables">Edit table</Link>

    <Route exact path="/management/user" component={User} role="management" />
    <Route exact path="/management/menu" component={Menu} role="management" />
    <Route exact path="/management/table" component={Table} role="management" />
  </div>
)









