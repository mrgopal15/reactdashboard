import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Modal from 'react-modal'
import './assets/index.css'
import App from './App'
import ForgotPassword from './ForgotPassword'
import Dashboard from './Dashboard'
import CustomerDetails from './CustomerDetails'

Modal.setAppElement('#root')


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/customerdetails" component={CustomerDetails} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
)
