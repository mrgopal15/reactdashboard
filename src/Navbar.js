import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <Link to='#/' className="navbar-brand col-sm-2 mr-0 text-center">XYZ Company</Link>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link to='/' className="nav-link">Sign out</Link>
        </li>
      </ul>
    </nav>
  )
}