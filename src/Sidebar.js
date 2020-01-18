import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav className="col-sm-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className={window.location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'} to="/dashboard">
              <span className="ion ion-md-home"></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className={window.location.pathname === '/customerdetails' ? 'nav-link active' : 'nav-link'} to="/customerdetails">
              <span className="ion ion-md-contact"></span>
              Customer Details
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}